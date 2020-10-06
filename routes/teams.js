const express = require('express');
const router = express.Router();
const conn = require('../database/connectDB');

router.get('', ((req, res) => {
    if (!(req.session.userId)) {
        res.redirect('sign_in')
    } else {
        res.render('teams')
    }
}))


module.exports = router