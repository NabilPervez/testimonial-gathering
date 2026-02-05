import { mockService, type Campaign, type Testimonial } from './mockData';

const API_URL = 'http://localhost:3000/api';

const isLocalBackendAvailable = async () => {
    try {
        await fetch(`${API_URL}/campaigns`, { method: 'HEAD' });
        return true;
    } catch (e) {
        return false;
    }
}

export const apiFn = {
    // Campaigns
    getCampaigns: async (): Promise<Campaign[]> => {
        try {
            const res = await fetch(`${API_URL}/campaigns`);
            if (!res.ok) throw new Error('Failed to fetch campaigns');
            return await res.json();
        } catch (e) {
            console.warn('Backend unavailable, falling back to mock data');
            return await mockService.getCampaigns();
        }
    },

    createCampaign: async (campaign: any): Promise<Campaign> => {
        try {
            const res = await fetch(`${API_URL}/campaigns`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(campaign)
            });
            if (!res.ok) throw new Error('Failed to create campaign');
            return await res.json();
        } catch (e) {
            console.warn('Backend unavailable, falling back to mock data');
            return await mockService.createCampaign(campaign);
        }
    },

    updateCampaign: async (id: number, updates: any): Promise<Campaign> => {
        try {
            const res = await fetch(`${API_URL}/campaigns/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates)
            });
            if (!res.ok) throw new Error('Failed to update campaign');
            return await res.json();
        } catch (e) {
            // Mock service doesn't have update yet, so we just simulate success with the updates
            console.warn('Backend unavailable, falling back to mock data');
            return { ...updates, id } as Campaign;
        }
    },

    // Testimonials
    getTestimonials: async (): Promise<Testimonial[]> => {
        try {
            const res = await fetch(`${API_URL}/testimonials`);
            if (!res.ok) throw new Error('Failed to fetch testimonials');
            return await res.json();
        } catch (e) {
            console.warn('Backend unavailable, falling back to mock data');
            return await mockService.getTestimonials();
        }
    },

    getTestimonialsByCampaign: async (slug: string): Promise<Testimonial[]> => {
        try {
            const res = await fetch(`${API_URL}/campaigns/${slug}/testimonials`);
            if (!res.ok) throw new Error('Failed to fetch campaign testimonials');
            return await res.json();
        } catch (e) {
            console.warn('Backend unavailable, falling back to mock data');
            return await mockService.getTestimonialsByCampaign(slug);
        }
    },

    submitTestimonial: async (submission: any): Promise<Testimonial> => {
        try {
            const res = await fetch(`${API_URL}/testimonials`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submission)
            });
            if (!res.ok) throw new Error('Failed to submit testimonial');
            // Assuming backend returns the created object
            return await res.json();
        } catch (e) {
            console.warn('Backend unavailable, falling back to mock data');
            return await mockService.submitTestimonial(submission);
        }
    },

    updateTestimonialStatus: async (id: number, status: any): Promise<Testimonial | undefined> => {
        try {
            const res = await fetch(`${API_URL}/testimonials/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            if (!res.ok) throw new Error('Failed to update status');
            return await res.json();
        } catch (e) {
            console.warn('Backend unavailable, falling back to mock data');
            return await mockService.updateTestimonialStatus(id, status);
        }
    }
};
