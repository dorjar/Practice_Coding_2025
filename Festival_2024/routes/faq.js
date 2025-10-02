const express = require('express');
const router = express.Router();
const db = require('../db/connection'); // Import the database connection

// Define routes
router.get('/', (req, res) => {
    db.all('SELECT * FROM faqs', (err, rows) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('faq', { faqs: rows });
        }
    });
});

module.exports = router;
