const express = require('express');
const router = express.Router();
const conn = require('../database/connectDB');

router.get('/:id', ((req, res, next) => {
    if (!(req.session.userId)) return () => {
        res.redirect('sign_in')
    }

    if (!req.body) return () => {
        res.json({result: 'Отправлена пустая форма'});
    }

    conn.query(`SELECT id, name, adding, admin FROM teams WHERE name = "${req.params.id}"`).then(team => {
        if (team[0][0] === undefined) {
            next()
        } else {
            let checkId = false
            for (let i = 0; i < req.session.teamsId.length; i++) {
                if (req.session.teamsId[i] === team[0][0]['id']) {
                    checkId = true
                    break
                }
            }
            if (checkId) {
                    conn.query(`SELECT * FROM teamTasks WHERE idTeam = "${team[0][0]['id']}"`).then(tasks => {
                    res.render('pageTeam', {tasks: tasks[0], team: team[0], userId: req.session.userId})
                }).catch(err => {
                    console.log(err)
                })
            } else {
                res.end('Access is denied')
            }
        }
    })
}))

module.exports = router