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

const isProduction = () => {
    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        return hostname !== 'localhost' && hostname !== '127.0.0.1';
    }
    return false;
};

export const apiFn = {
    // Campaigns
    getCampaigns: async (): Promise<Campaign[]> => {
        if (isProduction()) {
            console.log('Production environment detected, using Mock Data');
            return await mockService.getCampaigns();
        }
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
        if (isProduction()) return await mockService.createCampaign(campaign);
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
        if (isProduction()) return { ...updates, id } as Campaign;
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
        if (isProduction()) return await mockService.getTestimonials();
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
        if (isProduction()) return await mockService.getTestimonialsByCampaign(slug);
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
        if (isProduction()) return await mockService.submitTestimonial(submission);
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
        if (isProduction()) return await mockService.updateTestimonialStatus(id, status);
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
