const express = require('express');
const router = express.Router();
const conn = require('../database/connectDB');

router.get('', (req, res) => {
    if (!(req.session.userId)) {
        res.redirect('sign_in')
    }
    else {
        conn.query(`SELECT * FROM tasks WHERE idUser = "${req.session.userId}"`)
            .then( (tasks) => {
                res.render('index', {tasks: tasks[0]})
            })
            .catch(err => {
                console.log(err)
                res.render(error)
            })
    }
})

module.exports = router