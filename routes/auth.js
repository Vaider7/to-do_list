const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const conn = require('../database/connectDB');

router.post('/data', ((req, res) => {
        if (!req.body) return () => {
            res.sendStatus(400);
            res.json({result: 'Отправлена пустая форма'})
        }
        let login = req.body.login;
        let password = req.body.password;
        conn.query(`SELECT login, hashedPassword, id FROM users WHERE login = "${login}"`)
            .then((user) => {
                if (!(user[0][0] === undefined)) {
                    bcrypt.compare(password, user[0][0]['hashedPassword']).then((passRes) => {
                        if (passRes === true) {
                            req.session.userId = user[0][0]['id']
                            res.json({result: true})
                        } else {
                            res.json({result: 'Неверный логин или пароль'})
                        }
                    });
                } else {
                    res.json({result: 'Неверный логин или пароль'})
                }
            })
            .catch((err) => {
                console.log(err)
                res.json({result: 'Произошла ошибка, повторите попытку позднее'})
            })
        }
    )
)

module.exports = router