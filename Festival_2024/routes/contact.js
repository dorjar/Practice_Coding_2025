const express = require('express');
const router = express.Router();
const db = require('../db/connection'); // Import the database connection

// Define routes 
router.get('/', (req, res) => {
    res.render('contact');
});

router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form Data:', req.body); // Log the form data

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    const query = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    db.run(query, [name, email, message], (err) => {
        if (err) {
            console.error('Database insert error:', err.message);
            return res.status(500).send('Error submitting message');
        }
        res.redirect('/contact');
    });
});

router.get('/messages', (req, res) => {
    db.all('SELECT * FROM contact_messages', (err, rows) => {
        if (err) {
            return res.status(500).send('Error retrieving messages');
        }
        res.render('contact_messages', { messages: rows });
    });
});

module.exports = router;
