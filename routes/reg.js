const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const conn = require('../database/connectDB');


router.post('/data', ((req, res) => {
    if(!req.body) return () => {
        res.sendStatus(400);
        res.json({result: 'Отправлена пустая форма'})
    }

    let login = req.body.login_sign_up
    let email = req.body.email
    let password = req.body.password_sign_up
    let name = req.body.name
    let surname = req.body.surname
    let patronymic = req.body.patronymic

    conn.query(`SELECT login FROM users WHERE login = "${login}"`)
        .then(loginCheck => {
            if (loginCheck[0][0] === undefined) {
                conn.query(`SELECT email FROM users WHERE email = "${email}"`)
                    .then(emailCheck => {
                        if (emailCheck[0][0] === undefined) {
                            if (1 <= login.length <= 30) {
                                if (1 <= email.length <= 50) {
                                    if (1 <= password.length <= 25) {
                                        if (1 <= name.length <= 40) {
                                            if (1 <= surname.length <= 40) {
                                                if (1 <= patronymic.length <= 40) {
                                                    bcrypt.genSalt(10, (err, salt) => {
                                                        bcrypt.hash(password, salt, (err, hashedPassword) => {
                                                            conn.query(`INSERT INTO users (login, email, hashedPassword, name, surname, patronymic) VALUES ("${login}", "${email}", "${hashedPassword}", "${name}", "${surname}", "${patronymic}")`)
                                                                .then( () => {console.log('Adding user successful'); res.json({result: true})})
                                                                .catch(err => {
                                                                    console.log(err)
                                                                })
                                                        })
                                                    })
                                                } else {
                                                    res.json({result: 'Отчество должно иметь от 1 до 40 символов'})
                                                }
                                            } else {
                                                res.json({result: 'Фамилия должна иметь от 1 до 40 символов'})
                                            }
                                        } else {
                                            res.json({result: 'Имя должно иметь от 1 до 40 символов'})
                                        }
                                    } else {
                                        res.json({result: 'Пароль должен иметь от 1 до 25 символов'})
                                    }
                                } else {
                                    res.json({result: 'Email должен иметь от 1 до 50 символов'})
                                }
                            } else {
                                res.json({result: 'Логин должен иметь от 1 до 30 символов'})
                            }
                        } else {
                            res.json({result: 'Почта занята', field: 'email'})
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        res.json({result: 'Произошла ошибка, повторите попытку позднее'})
                    })
            } else {
                res.json({result: 'Логин занят', field: 'login_sign_up'})
            }
        })
        .catch((err) => {
            console.log(err)
            res.json({result: 'Произошла ошибка, повторите попытку позднее'})
        })
    })
)


module.exports = router