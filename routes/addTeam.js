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
        res.json({result: 'Отправлена пустая форма'});
    }

    let name = req.body.createLogin
    let password = req.body.createPassword
    let power = req.body.power

    conn.query(`SELECT name FROM teams WHERE name = "${name}"`)
        .then(checkTeam => {
            if (!(checkTeam[0][0] === undefined)) {
                res.json({result: 'Такая команда уже существует'})
            } else {
                if (!(1 <= name.length <=20)) {
                    res.json({result: 'Имя группы должно иметь от 1 до 20 символов'})
                } else {
                    if (!(password.length <= 25)) {
                        res.json({result: 'Пароль должен иметь от 0 до 25 символов'})
                    } else {
                        if (password.length === 0) {
                            conn.query(`INSERT INTO teams (name, hashedPassword, adding) VALUES ("${name}", "${password}", "${power}")`)
                                .then( () => {console.log('Adding user successful'); res.json({result: true})})
                                .catch(err => {
                                    console.log(err)
                            })
                        } else {
                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(password, salt, (err, hashedPassword) => {
                                    conn.query(`INSERT INTO teams (name, hashedPassword, adding) VALUES ("${name}", "${hashedPassword}", "${power}")`)
                                        .then( () => {console.log('Adding user successful'); res.json({result: true})})
                                        .catch(err => {
                                            console.log(err)
                                        })
                                })
                            })
                        }
                    }
                }
            }
        }).catch(err => {
            console.log(err)
            res.json({result: 'Произошла ошибка'})
    })
}))


module.exports = router