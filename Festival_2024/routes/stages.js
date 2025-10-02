const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
    db.all('SELECT * FROM stages', (err, stages) => {
        if (err) {
            return res.status(500).send('Error retrieving stages');
        }

        db.all('SELECT * FROM performances', (err, performances) => {
            if (err) {
                return res.status(500).send('Error retrieving performances');
            }

            // Merge performances with their respective stages
            stages.forEach(stage => {
                stage.performances = performances.filter(performance => performance.stage_id === stage.id);
            });

            res.render('stages', { stages });
        });
    });
});

module.exports = router;

