const express = require('express');
const router = express.Router();
const conn = require('../database/connectDB');

router.get('', ((req, res) => {
    if (!(req.session.userId)) {
        res.redirect('sign_in')
    } else {
        let teams = []
        let ids = '('
        if (req.session.teamsId.length === 0) {
            res.render('teams')
        } else {
            for (let i = 0; i < req.session.teamsId.length; i++) {
                ids += req.session.teamsId[i]
                ids += ', '
            }
            ids = ids.slice(0, ids.length -2)
            ids += ')'
            conn.query(`SELECT id, name FROM teams WHERE id in ${ids}`).then((list) => {
                for (let i = 0; i < list[0].length; i++) {
                    teams.push(list[0][i]['name'])
                }
                res.render('teams', {teams})
            })
        }
    }
}))


module.exports = router