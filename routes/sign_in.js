const express = require('express');
const router = express.Router();
const session = require('express-session');

router.get('', (req, res) => {
    if (req.session.userId) {
        res.redirect('/')
    } else {
        res.render('sign_in');
    }
});

module.exports = router