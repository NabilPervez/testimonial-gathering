const { getDB } = require('./database');

const testimonials = [
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
    const date = new Date().toISOString().split('T')[0];

    for (const t of testimonials) {
        const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random`;
        await db.run(
            'INSERT INTO testimonials (campaignSlug, name, title, rating, type, content, status, date, avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            t.campaignSlug, t.name, t.title, t.rating, "text", t.content, t.status, date, avatar
        );
    }

    console.log('Database seeded with ' + testimonials.length + ' testimonials!');
}

seed().catch(console.error);
