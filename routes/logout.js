const express = require('express');
const router = express.Router();
const conn = require('../database/connectDB');

router.get('', (req, res) => {
    if (req.session) {
        req.session.destroy(() => {
            res.json({result: true})
        });
    } else {
        res.redirect('/');
    }
});

module.exports = router