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

// Helper to load from localStorage or default
const loadFromStorage = <T>(key: string, defaultData: T): T => {
    // In a real SSR env, check window/localStorage existence
    if (typeof localStorage === 'undefined') return defaultData;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultData;
}

const saveToStorage = (key: string, data: any) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

// Initial Data (Default)
const defaultCampaigns: Campaign[] = [
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

const mockTestimonialsData = [
    // SUMMER LAUNCH - 12 Items
    { campaignSlug: "summer-launch", name: "Sarah Connor", title: "CTO at Skynet", rating: 5, status: "approved", content: "The new collection is absolutely stunning. I love the fabric quality!" },
    { campaignSlug: "summer-launch", name: "Ellen Ripley", title: "Warrant Officer", rating: 5, status: "approved", content: "Durable and stylish. Survived everything I threw at it." },
    { campaignSlug: "summer-launch", name: "Marty McFly", title: "Time Traveler", rating: 4, status: "approved", content: "Great for any era. A bit heavy but looks heavy." },
    { campaignSlug: "summer-launch", name: "Doc Brown", title: "Inventor", rating: 5, status: "approved", content: "Great Scott! This is exactly what I needed for the reactor." },
    { campaignSlug: "summer-launch", name: "Han Solo", title: "Smuggler", rating: 4, status: "approved", content: "I made the purchase in less than 12 parsecs. Good stuff." },
    { campaignSlug: "summer-launch", name: "Leia Organa", title: "General", rating: 5, status: "approved", content: "Elegant enough for the senate, practical enough for a rebellion." },
    { campaignSlug: "summer-launch", name: "Luke Skywalker", title: "Jedi Master", rating: 5, status: "approved", content: "I feel a great disturbance in the force... of how good this is." },
    { campaignSlug: "summer-launch", name: "Lara Croft", title: "Archaeologist", rating: 5, status: "approved", content: "Perfect for exploring ancient tombs. Highly durable." },
    { campaignSlug: "summer-launch", name: "Nathan Drake", title: "Treasure Hunter", rating: 4, status: "approved", content: "Held up well during the crash. 10/10 would buy again." },
    { campaignSlug: "summer-launch", name: "Indiana Jones", title: "Professor", rating: 5, status: "approved", content: "It belongs in a museum! That's how good it looks." },
    { campaignSlug: "summer-launch", name: "James Bond", title: "Agent 007", rating: 5, status: "approved", content: "Impeccable style. Shaken, not stirred." },
    { campaignSlug: "summer-launch", name: "Ethan Hunt", title: "IMF Agent", rating: 5, status: "approved", content: "Mission possible! This gear made it happen." },

    // WEBSITE REDESIGN - 12 Items
    { campaignSlug: "website-redesign", name: "Peter Parker", title: "Photographer", rating: 5, status: "approved", content: "The new layout is amazing! So snappy and responsive on mobile." },
    { campaignSlug: "website-redesign", name: "Diana Prince", title: "Museum Curator", rating: 5, status: "approved", content: "Elegant typography and easy to navigate. A wonderful improvement." },
    { campaignSlug: "website-redesign", name: "Clark Kent", title: "Journalist", rating: 4, status: "approved", content: "Much faster load times. I can upload stories in a flash." },
    { campaignSlug: "website-redesign", name: "Bruce Banner", title: "Scientist", rating: 5, status: "approved", content: "The data visualization components are incredible. Very useful." },
    { campaignSlug: "website-redesign", name: "Barry Allen", title: "Forensic Scientist", rating: 5, status: "approved", content: "It's fast. Like, really fast. I assume you used a CDN?" },
    { campaignSlug: "website-redesign", name: "Arthur Curry", title: "King of Atlantis", rating: 4, status: "approved", content: "Fluid animations. Reminds me of the ocean." },
    { campaignSlug: "website-redesign", name: "Victor Stone", title: "Cyborg", rating: 5, status: "approved", content: "Clean codebase, accessible markup. My systems integrate perfectly." },
    { campaignSlug: "website-redesign", name: "Hal Jordan", title: "Pilot", rating: 3, status: "approved", content: "A bit too bright, but the flight path (navigation) is clear." },
    { campaignSlug: "website-redesign", name: "Oliver Queen", title: "Mayor", rating: 5, status: "approved", content: "Right on target. You didn't fail this city with this design." },
    { campaignSlug: "website-redesign", name: "Jean Grey", title: "Teacher", rating: 5, status: "approved", content: "Intuitive. It's like it reads my mind before I click." },
    { campaignSlug: "website-redesign", name: "Scott Summers", title: "Leader", rating: 4, status: "approved", content: "Clear vision. Everything is well aligned." },
    { campaignSlug: "website-redesign", name: "Logan", title: "Drifie", rating: 5, status: "approved", content: "It works. Whatever." },

    // CSAT Q1 - 12 Items
    { campaignSlug: "csat-q1", name: "Tony Stark", title: "CEO", rating: 5, status: "approved", content: "This product is the future. Integrating it was a breeze." },
    { campaignSlug: "csat-q1", name: "Steve Rogers", title: "Captain", rating: 5, status: "approved", content: "Honest, reliable service. Would recommend to anyone." },
    { campaignSlug: "csat-q1", name: "Natasha Romanoff", title: "Agent", rating: 5, status: "approved", content: "Efficient and discreet. Perfect execution of the roadmap." },
    { campaignSlug: "csat-q1", name: "Wanda Maximoff", title: "Homeowner", rating: 5, status: "approved", content: "Magical experience! Truly transformative for our workflow." },
    { campaignSlug: "csat-q1", name: "Thor Odinson", title: "Prince", rating: 5, status: "approved", content: "ANOTHER! I want another subscription immediately." },
    { campaignSlug: "csat-q1", name: "Clint Barton", title: "Archer", rating: 4, status: "approved", content: "Never misses the mark. Customer support was spot on." },
    { campaignSlug: "csat-q1", name: "Nick Fury", title: "Director", rating: 5, status: "approved", content: "Finally, something that actually works. Good job." },
    { campaignSlug: "csat-q1", name: "Carol Danvers", title: "Pilot", rating: 5, status: "approved", content: "Higher, further, faster. This platform scales beautifully." },
    { campaignSlug: "csat-q1", name: "T'Challa", title: "King", rating: 5, status: "approved", content: "Technologically superior. Wakanda forever." },
    { campaignSlug: "csat-q1", name: "Peter Quill", title: "Captain", rating: 4, status: "approved", content: "Good tunes... I mean, good tools. Yeah. Awesome mix." },
    { campaignSlug: "csat-q1", name: "Gamora", title: "Assassin", rating: 5, status: "approved", content: "Balanced. As all things should be." },
    { campaignSlug: "csat-q1", name: "Rocket", title: "Engineer", rating: 5, status: "approved", content: "I need that arm... and this software. It's efficient." }
];

const defaultTestimonials: Testimonial[] = mockTestimonialsData.map((t, index) => ({
    id: 100 + index,
    campaignSlug: t.campaignSlug,
    name: t.name,
    title: t.title,
    rating: t.rating,
    type: 'text',
    content: t.content,
    status: t.status as 'pending' | 'approved' | 'rejected', // Force type
    date: '2023-06-20',
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random`
}));

// Initialize from storage or defaults
let campaigns: Campaign[] = loadFromStorage('campaigns_v2', defaultCampaigns);
let testimonials: Testimonial[] = loadFromStorage('testimonials_v2', defaultTestimonials);


// Service Methods simulating Async API calls
export const mockService = {
    // Campaigns
    getCampaigns: async (): Promise<Campaign[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                campaigns = loadFromStorage('campaigns_v2', defaultCampaigns); // Refresh
                resolve([...campaigns]);
            }, 300);
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
                saveToStorage('campaigns_v2', campaigns);
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
            setTimeout(() => {
                testimonials = loadFromStorage('testimonials_v2', defaultTestimonials);
                resolve([...testimonials]);
            }, 300);
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
                saveToStorage('testimonials_v2', testimonials);

                // Update specific campaign response count
                const campaign = campaigns.find(c => c.slug === submission.campaignSlug);
                if (campaign) {
                    campaign.responses++;
                    campaign.lastActive = 'Just now';
                    saveToStorage('campaigns_v2', campaigns);
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
                    saveToStorage('testimonials_v2', testimonials);
                    resolve(testimonials[index]);
                } else {
                    resolve(undefined);
                }
            }, 300);
        });
    }
};
