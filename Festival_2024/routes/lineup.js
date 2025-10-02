const express = require('express');
const router = express.Router();
const db = require('../db/connection'); // Import the database connection

// New route to fetch lineup data as JSON
router.get('/data', (req, res) => {
    db.all('SELECT * FROM lineup', (err, rows) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows); // Send the lineup data as JSON
        }
    });
});

// Define your routes here
router.get('/', (req, res) => {
    db.all('SELECT * FROM lineup', (err, rows) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('lineup', { lineup: rows });
        }
    });
});

module.exports = router;
