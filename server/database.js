const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

let db;

async function getDB() {
    if (db) return db;

    db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS campaigns (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            slug TEXT UNIQUE,
            status TEXT,
            responses INTEGER,
            lastActive TEXT,
            headerTitle TEXT,
            allowText INTEGER,
            allowVideo INTEGER
        );

        CREATE TABLE IF NOT EXISTS testimonials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            campaignSlug TEXT,
            name TEXT,
            title TEXT,
            rating INTEGER,
            type TEXT,
            content TEXT,
            status TEXT,
            date TEXT,
            avatar TEXT,
            FOREIGN KEY(campaignSlug) REFERENCES campaigns(slug)
        );
    `);

    return db;
}

module.exports = { getDB };
