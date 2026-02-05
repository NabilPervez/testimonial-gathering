const express = require('express');
const cors = require('cors');
const { getDB } = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Campaigns
app.get('/api/campaigns', async (req, res) => {
    const db = await getDB();
    const campaigns = await db.all('SELECT * FROM campaigns');
    res.json(campaigns);
});

app.post('/api/campaigns', async (req, res) => {
    const { name, slug, headerTitle, allowText, allowVideo } = req.body;
    const db = await getDB();
    const result = await db.run(
        'INSERT INTO campaigns (name, slug, status, responses, lastActive, headerTitle, allowText, allowVideo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        name, slug, 'Active', 0, 'Just now', headerTitle, allowText ? 1 : 0, allowVideo ? 1 : 0
    );
    const newCampaign = await db.get('SELECT * FROM campaigns WHERE id = ?', result.lastID);
    res.json(newCampaign);
});

app.put('/api/campaigns/:id', async (req, res) => {
    const { name, status, headerTitle } = req.body;
    const db = await getDB();
    await db.run(
        'UPDATE campaigns SET name = ?, status = ?, headerTitle = ? WHERE id = ?',
        name, status, headerTitle, req.params.id
    );
    const updated = await db.get('SELECT * FROM campaigns WHERE id = ?', req.params.id);
    res.json(updated);
});

// Testimonials
app.get('/api/testimonials', async (req, res) => {
    const db = await getDB();
    const testimonials = await db.all('SELECT * FROM testimonials');
    res.json(testimonials);
});

app.get('/api/campaigns/:slug/testimonials', async (req, res) => {
    const db = await getDB();
    const testimonials = await db.all('SELECT * FROM testimonials WHERE campaignSlug = ?', req.params.slug);
    res.json(testimonials);
});

app.post('/api/testimonials', async (req, res) => {
    const { campaignSlug, name, title, rating, type, content, avatar } = req.body;
    const db = await getDB();
    const date = new Date().toISOString().split('T')[0];
    const result = await db.run(
        'INSERT INTO testimonials (campaignSlug, name, title, rating, type, content, status, date, avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        campaignSlug, name, title, rating, type, content, 'pending', date, avatar
    );

    // Update campaign responses count
    await db.run('UPDATE campaigns SET responses = responses + 1, lastActive = ? WHERE slug = ?', 'Just now', campaignSlug);

    const newTestimonial = await db.get('SELECT * FROM testimonials WHERE id = ?', result.lastID);
    res.json(newTestimonial);
});

app.put('/api/testimonials/:id/status', async (req, res) => {
    const { status } = req.body;
    const db = await getDB();
    await db.run('UPDATE testimonials SET status = ? WHERE id = ?', status, req.params.id);
    const updated = await db.get('SELECT * FROM testimonials WHERE id = ?', req.params.id);
    res.json(updated);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
