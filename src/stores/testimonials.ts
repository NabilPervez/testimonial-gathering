import { defineStore } from 'pinia'
import { mockService, type Testimonial } from '../services/mockData'

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
                const data = await mockService.getTestimonials()
                this.items = data
            } catch (e) {
                this.error = 'Failed to fetch testimonials'
            } finally {
                this.loading = false
            }
        },

        async fetchByCampaign(slug: string) {
            // For now, we'll just fetch all and filter client side or mock service side
            // But mock service has a specific method
            this.loading = true
            try {
                const data = await mockService.getTestimonialsByCampaign(slug)
                // Just merging for MVP simplicity, or replacing if checking a specific view
                // Better to keep a single source of truth list or separate lists
                // Let's verify if items are already there to avoid duplicates if we push
                // For MVP: Replaces items with filtered list logic might be tricky if we switch views
                // So let's just use fetchAll for the admin view, and specific methods for specific public views if needed.
                // Actually, let's just update the main list with what we find, deduping by ID
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
                const newTestimonial = await mockService.submitTestimonial(submission)
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
                    await mockService.updateTestimonialStatus(id, status)
                } catch (e) {
                    // Revert
                    this.items[index].status = oldStatus
                    this.error = 'Failed to update status'
                }
            }
        }
    }
})
