const express = require('express');
const router = express.Router();
const session = require('express-session');

router.get('', (req, res) => {
    if (!(req.session.userId)) {
        res.redirect('sign_in')
    }
    else {
        res.render('index')
    }
})

module.exports = router