import { type Campaign, type Testimonial } from './mockData';

const API_URL = 'http://localhost:3000/api';

export const apiFn = {
    // Campaigns
    getCampaigns: async (): Promise<Campaign[]> => {
        const res = await fetch(`${API_URL}/campaigns`);
        if (!res.ok) throw new Error('Failed to fetch campaigns');
        return res.json();
    },

    createCampaign: async (campaign: any): Promise<Campaign> => {
        const res = await fetch(`${API_URL}/campaigns`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(campaign)
        });
        if (!res.ok) throw new Error('Failed to create campaign');
        return res.json();
    },

    updateCampaign: async (id: number, updates: any): Promise<Campaign> => {
        const res = await fetch(`${API_URL}/campaigns/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates)
        });
        if (!res.ok) throw new Error('Failed to update campaign');
        return res.json();
    },

    // Testimonials
    getTestimonials: async (): Promise<Testimonial[]> => {
        const res = await fetch(`${API_URL}/testimonials`);
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        return res.json();
    },

    getTestimonialsByCampaign: async (slug: string): Promise<Testimonial[]> => {
        const res = await fetch(`${API_URL}/campaigns/${slug}/testimonials`);
        if (!res.ok) throw new Error('Failed to fetch campaign testimonials');
        return res.json();
    },

    submitTestimonial: async (submission: any): Promise<Testimonial> => {
        const res = await fetch(`${API_URL}/testimonials`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submission)
        });
        if (!res.ok) throw new Error('Failed to submit testimonial');
        return res.json();
    },

    updateTestimonialStatus: async (id: number, status: string): Promise<Testimonial> => {
        const res = await fetch(`${API_URL}/testimonials/${id}/status`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        if (!res.ok) throw new Error('Failed to update status');
        return res.json();
    }
};
