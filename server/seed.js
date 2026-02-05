const { getDB } = require('./database');

async function seed() {
    const db = await getDB();

    // Clear existing
    await db.run('DELETE FROM campaigns');
    await db.run('DELETE FROM testimonials');

    // Seed Campaigns
    const campaigns = [
        {
            name: "Summer Launch Feedback",
            slug: "summer-launch",
            status: "Active",
            responses: 24,
            lastActive: "2h ago",
            headerTitle: "How did you like the Summer collection?",
            allowText: 1,
            allowVideo: 1
        },
        {
            name: "Website Redesign",
            slug: "website-redesign",
            status: "Paused",
            responses: 12,
            lastActive: "1d ago",
            headerTitle: "Thoughts on the new look?",
            allowText: 1,
            allowVideo: 0
        },
        {
            name: "Customer Satisfaction Q1",
            slug: "csat-q1",
            status: "Active",
            responses: 156,
            lastActive: "5m ago",
            headerTitle: "How are we doing?",
            allowText: 1,
            allowVideo: 1
        }
    ];

    for (const c of campaigns) {
        await db.run(
            'INSERT INTO campaigns (name, slug, status, responses, lastActive, headerTitle, allowText, allowVideo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            c.name, c.slug, c.status, c.responses, c.lastActive, c.headerTitle, c.allowText, c.allowVideo
        );
    }

    // Seed Testimonials
    const testimonials = [
        // Summer Launch (Approved)
        {
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
            campaignSlug: "summer-launch",
            name: "Ellen Ripley",
            title: "Warrant Officer",
            rating: 5,
            type: "text",
            content: "Durable and stylish. Survived everything I threw at it.",
            status: "approved",
            date: "2023-06-18"
        },
        {
            campaignSlug: "summer-launch",
            name: "Marty McFly",
            title: "Time Traveler",
            rating: 4,
            type: "text",
            content: "Great for any era. A bit heavy but looks heavy.",
            status: "approved",
            date: "2023-06-19"
        },
        // Summer Launch (Pending/Rejected)
        {
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
            campaignSlug: "summer-launch",
            name: "Bruce Wayne",
            title: "Philanthropist",
            rating: 3,
            type: "text",
            content: "It comes in black, right? Good quality otherwise.",
            status: "pending",
            date: "2023-06-22"
        },

        // Website Redesign (Approved)
        {
            campaignSlug: "website-redesign",
            name: "Peter Parker",
            title: "Photographer",
            rating: 5,
            type: "text",
            content: "The new layout is amazing! So snappy and responsive.",
            status: "approved",
            date: "2023-06-23"
        },
        {
            campaignSlug: "website-redesign",
            name: "Diana Prince",
            title: "Museum Curator",
            rating: 5,
            type: "text",
            content: "Elegant and easy to navigate. A wonderful improvement.",
            status: "approved",
            date: "2023-06-24"
        },
        {
            campaignSlug: "website-redesign",
            name: "Clark Kent",
            title: "Journalist",
            rating: 4,
            type: "text",
            content: "Much faster load times. Good job team.",
            status: "approved",
            date: "2023-06-25"
        },
        // Website Redesign (Rejected)
        {
            campaignSlug: "website-redesign",
            name: "Alice Wonderland",
            title: "Explorer",
            rating: 4,
            type: "text",
            content: "The navigation is a bit confusing, but the colors are great.",
            status: "rejected",
            date: "2023-06-10"
        },

        // CSAT Q1 (Approved)
        {
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
            campaignSlug: "csat-q1",
            name: "Natasha Romanoff",
            title: "Agent",
            rating: 5,
            type: "text",
            content: "Efficient and discreet. Perfect execution.",
            status: "approved",
            date: "2023-06-26"
        },
        {
            campaignSlug: "csat-q1",
            name: "Wanda Maximoff",
            title: "Homeowner",
            rating: 5,
            type: "text",
            content: "Magical experience! Truly transformative.",
            status: "approved",
            date: "2023-06-27"
        }
    ];

    for (const t of testimonials) {
        await db.run(
            'INSERT INTO testimonials (campaignSlug, name, title, rating, type, content, status, date, avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            t.campaignSlug, t.name, t.title, t.rating, t.type, t.content, t.status, t.date, t.avatar
        );
    }

    console.log('Database seeded!');
}

seed().catch(console.error);
