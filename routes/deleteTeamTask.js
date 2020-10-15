const express = require('express');
const router = express.Router();
const conn = require('../database/connectDB');

router.post('/data/:name', ((req, res) => {
    if (!req.session.userId) return () => {
        res.json({result: 'Accessed is denied'});
        res.sendStatus(403);
    }

    if (!req.body) return () => {
        res.json({result: 'Отправлена пустая форма'});
    }

    conn.query(`SELECT id, name, adding, admin FROM teams WHERE name = "${req.params.name}"`).then(team => {
        if (team[0][0] === undefined) return () => {
            res.json({result: 'Команда не найдена'})
        }

        if (team[0][0]['admin'] === req.session.userId) {
            let idTask = req.body.id
            conn.query(`DELETE FROM teamTasks WHERE idTask = "${idTask}"`).then( () => {
                res.json({result: true})
            }).catch(err => {
                console.log(err)
                res.json({result: 'Произошла ошибка, повторите попытку позднее'})
            })
        } else {
            res.json({result: 'Accessed is denied'});
            res.sendStatus(403);
        }

    })

}))

module.exports = router