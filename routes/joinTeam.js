const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const conn = require('../database/connectDB');

router.post('/data', ((req, res) => {

    if (!req.session.userId) return () => {
        res.json({result: 'Accessed is denied'});
        res.sendStatus(403);
    }

    if (!req.body) return () => {
        res.sendStatus(400);
        res.json({result: 'Отправлена пустая форма'})
    }

    let name = req.body.joinLogin;
    let password = req.body.joinPassword;


    conn.query(`SELECT name, hashedPassword, id FROM teams WHERE name = "${name}"`)
        .then((team) => {
            if (!(team[0][0] === undefined)) {
                let checkInto = false
                for (let i = 0; i < req.session.teamsId.length; i++) {
                    if (req.session.teamsId[i] === team[0][0]['id']) {
                        checkInto = true
                        break
                    }
                }
                if (checkInto) {
                    res.json({result: 'Вы уже состоите в этой команде'})
                } else {
                    if (password.length === 0 && team[0][0]['hashedPassword'] === '') {
                        if (team[0][0]['name'] === name) {
                            req.session.teamsId.push(team[0][0]['id'])
                            res.json({result: true})
                        } else {
                            res.json({result: 'Неверный имя или пароль'})
                        }
                    } else {
                        bcrypt.compare(password, team[0][0]['hashedPassword']).then((passRes) => {
                            if (passRes) {
                                req.session.teamsId.push(team[0][0]['id'])
                                res.json({result: true})
                            } else {
                                res.json({result: 'Неверный имя или пароль'})
                            }
                        });
                    }
                }
            } else {
                res.json({result: 'Неверное имя или пароль'})
            }
        })
        .catch((err) => {
            console.log(err)
            res.json({result: 'Произошла ошибка, повторите попытку позднее'})
        })
}))

module.exports = router