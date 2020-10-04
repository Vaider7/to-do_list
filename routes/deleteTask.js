const express = require('express');
const router = express.Router();
const conn = require('../database/connectDB')

router.post('/data', ((req, res) => {
    if (!req.session.userId) return () => {
        res.json({result: 'Accessed is denied'});
        res.sendStatus(403);
    }

    if (!req.body) return () => {
        res.json({result: 'Отправлена пустая форма'});
    }
    let idTask = req.body.id
    let idUser = req.session.userId

    conn.query(`SELECT idTask, idUser FROM tasks WHERE idTask = "${idTask}"`)
        .then((task)=> {
            if (task[0][0]['idUser'] === idUser) {
                conn.query(`DELETE FROM tasks WHERE idTask = ${idTask}`).then(() => {
                    res.json({result: true})
                }) .catch(err => {
                    console.log(err)
                    res.json({result: 'Произошла ошибка, повторите попытку позднее'})
                })
            }
        }).catch(err => {
            console.log(err)
            res.json({result: 'Произошла ошибка, повторите попытку позднее'})
    })
}))


module.exports = router