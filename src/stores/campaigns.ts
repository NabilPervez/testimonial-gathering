import { defineStore } from 'pinia'
import { mockService, type Campaign } from '../services/mockData'

export const useCampaignStore = defineStore('campaigns', {
    state: () => ({
        items: [] as Campaign[],
        loading: false,
        error: null as string | null
    }),

    getters: {
        activeCampaigns: (state) => state.items.filter(c => c.status === 'Active'),
        totalResponses: (state) => state.items.reduce((acc, curr) => acc + curr.responses, 0)
    },

    actions: {
        async fetchCampaigns() {
            this.loading = true
            try {
                const data = await mockService.getCampaigns()
                this.items = data
            } catch (e) {
                this.error = 'Failed to fetch campaigns'
            } finally {
                this.loading = false
            }
        },

        async createCampaign(campaign: Omit<Campaign, 'id' | 'responses' | 'lastActive'>) {
            this.loading = true
            try {
                const newCampaign = await mockService.createCampaign(campaign)
                this.items.push(newCampaign)
                return newCampaign
            } catch (e) {
                this.error = 'Failed to create campaign'
                throw e
            } finally {
                this.loading = false
            }
        }
    }
})
