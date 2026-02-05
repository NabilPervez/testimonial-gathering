export interface Campaign {
    id: number;
    name: string;
    slug: string;
    status: 'Active' | 'Paused';
    responses: number;
    lastActive: string;
    headerTitle?: string;
    allowText?: boolean;
    allowVideo?: boolean;
}

export interface Testimonial {
    id: number;
    campaignSlug: string;
    name: string;
    title: string;
    rating: number;
    type: 'text' | 'video';
    content: string;
    status: 'pending' | 'approved' | 'rejected';
    date: string;
    avatar?: string;
}

// Initial Mock Data
let campaigns: Campaign[] = [
    {
        id: 1,
        name: "Summer Launch Feedback",
        slug: "summer-launch",
        status: "Active",
        responses: 24,
        lastActive: "2h ago",
        headerTitle: "How did you like the Summer collection?",
        allowText: true,
        allowVideo: true
    },
    {
        id: 2,
        name: "Website Redesign",
        slug: "website-redesign",
        status: "Paused",
        responses: 12,
        lastActive: "1d ago",
        headerTitle: "Thoughts on the new look?",
        allowText: true,
        allowVideo: false
    },
    {
        id: 3,
        name: "Customer Satisfaction Q1",
        slug: "csat-q1",
        status: "Active",
        responses: 156,
        lastActive: "5m ago",
        headerTitle: "How are we doing?",
        allowText: true,
        allowVideo: true
    }
];

let testimonials: Testimonial[] = [
    {
        id: 101,
        campaignSlug: "summer-launch",
        name: "Sarah Connor",
        title: "CTO at Skynet",
        rating: 5,
        type: "text",
        content: "The new collection is absolutely stunning. I love the fabric quality!",
        status: "approved",
        date: "2023-06-15"
    },
    {
        id: 102,
        campaignSlug: "summer-launch",
        name: "John Wick",
        title: "Professional",
        rating: 5,
        type: "text",
        content: "Robust and reliable. Exactly what I needed.",
        status: "pending",
        date: "2023-06-16"
    },
    {
        id: 103,
        campaignSlug: "website-redesign",
        name: "Alice Wonderland",
        title: "Explorer",
        rating: 4,
        type: "text",
        content: "The navigation is a bit confusing, but the colors are great.",
        status: "rejected",
        date: "2023-06-10"
    },
    {
        id: 104,
        campaignSlug: "csat-q1",
        name: "Tony Stark",
        title: "CEO at Stark Industries",
        rating: 5,
        type: "text",
        content: "This product is the future. Integrating it was a breeze.",
        status: "approved",
        date: "2023-06-20",
        avatar: "https://ui-avatars.com/api/?name=Tony+Stark&background=random"
    },
    {
        id: 105,
        campaignSlug: "csat-q1",
        name: "Steve Rogers",
        title: "Captain",
        rating: 5,
        type: "text",
        content: "Honest, reliable service. Would recommend to anyone.",
        status: "approved",
        date: "2023-06-21"
    },
    {
        id: 106,
        campaignSlug: "summer-launch",
        name: "Bruce Wayne",
        title: "Philanthropist",
        rating: 3,
        type: "text",
        content: "It comes in black, right? Good quality otherwise.",
        status: "pending",
        date: "2023-06-22"
    },
    {
        id: 107,
        campaignSlug: "website-redesign",
        name: "Peter Parker",
        title: "Photographer",
        rating: 5,
        type: "text",
        content: "The new layout is amazing! So snappy and responsive.",
        status: "approved",
        date: "2023-06-23"
    }
];

// Service Methods simulating Async API calls
export const mockService = {
    // Campaigns
    getCampaigns: async (): Promise<Campaign[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...campaigns]), 300);
        });
    },

    createCampaign: async (newCampaign: Omit<Campaign, 'id' | 'responses' | 'lastActive'>): Promise<Campaign> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const campaign: Campaign = {
                    ...newCampaign,
                    id: Math.floor(Math.random() * 10000),
                    responses: 0,
                    lastActive: 'Just now',
                    status: 'Active'
                };
                campaigns.push(campaign);
                resolve(campaign);
            }, 400);
        });
    },

    getCampaignBySlug: async (slug: string): Promise<Campaign | undefined> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(campaigns.find(c => c.slug === slug)), 200);
        });
    },

    // Testimonials
    getTestimonials: async (): Promise<Testimonial[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...testimonials]), 300);
        });
    },

    getTestimonialsByCampaign: async (slug: string): Promise<Testimonial[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(testimonials.filter(t => t.campaignSlug === slug)), 200);
        });
    },

    submitTestimonial: async (submission: Omit<Testimonial, 'id' | 'status' | 'date'>): Promise<Testimonial> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const testimonial: Testimonial = {
                    ...submission,
                    id: Math.floor(Math.random() * 10000),
                    status: 'pending',
                    date: new Date().toISOString().split('T')[0]
                };
                testimonials.push(testimonial);

                // Update specific campaign response count
                const campaign = campaigns.find(c => c.slug === submission.campaignSlug);
                if (campaign) {
                    campaign.responses++;
                    campaign.lastActive = 'Just now';
                }

                resolve(testimonial);
            }, 600);
        });
    },

    updateTestimonialStatus: async (id: number, status: 'approved' | 'rejected' | 'pending'): Promise<Testimonial | undefined> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = testimonials.findIndex(t => t.id === id);
                if (index !== -1) {
                    testimonials[index].status = status;
                    resolve(testimonials[index]);
                } else {
                    resolve(undefined);
                }
            }, 300);
        });
    }
};
