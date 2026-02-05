import { defineStore } from 'pinia'
import { apiFn } from '../services/api'
import { type Testimonial } from '../services/mockData'

export const useTestimonialStore = defineStore('testimonials', {
    state: () => ({
        items: [] as Testimonial[],
        loading: false,
        error: null as string | null
    }),

    getters: {
        approvedTestimonials: (state) => state.items.filter(t => t.status === 'approved'),
        pendingTestimonials: (state) => state.items.filter(t => t.status === 'pending')
    },

    actions: {
        async fetchTestimonials() {
            this.loading = true
            try {
                const data = await apiFn.getTestimonials()
                this.items = data
            } catch (e) {
                this.error = 'Failed to fetch testimonials'
            } finally {
                this.loading = false
            }
        },

        async fetchByCampaign(slug: string) {
            this.loading = true
            try {
                // Fetch specific campaign testimonials and merge/update
                const data = await apiFn.getTestimonialsByCampaign(slug)

                // Update local items ensuring no duplicates (simple approach)
                data.forEach(newItem => {
                    const index = this.items.findIndex(existing => existing.id === newItem.id)
                    if (index !== -1) {
                        this.items[index] = newItem
                    } else {
                        this.items.push(newItem)
                    }
                })
            } catch (e) {
                this.error = 'Failed to fetch campaign testimonials'
            } finally {
                this.loading = false
            }
        },

        async submitTestimonial(submission: Omit<Testimonial, 'id' | 'status' | 'date'>) {
            this.loading = true
            try {
                const newTestimonial = await apiFn.submitTestimonial(submission)
                this.items.push(newTestimonial)
                return newTestimonial
            } catch (e) {
                this.error = 'Failed to submit testimonial'
                throw e
            } finally {
                this.loading = false
            }
        },

        async updateStatus(id: number, status: 'approved' | 'rejected' | 'pending') {
            const index = this.items.findIndex(t => t.id === id)
            if (index !== -1) {
                // Optimistic update
                const oldStatus = this.items[index].status
                this.items[index].status = status

                try {
                    await apiFn.updateTestimonialStatus(id, status)
                } catch (e) {
                    // Revert
                    this.items[index].status = oldStatus
                    this.error = 'Failed to update status'
                }
            }
        }
    }
})
