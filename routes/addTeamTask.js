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
        if (team[0][0] === undefined) {
            return () => {
                res.json({result: 'Команда не найдена'})
            }
        } else {
            let checkId = false
            for (let i = 0; i < req.session.teamsId.length; i++) {
                if (req.session.teamsId[i] === team[0][0]['id']) {
                    checkId = true
                }
            }
            if (checkId) {

                let taskHeader = req.body.task_header;
                let dateStart = req.body.date_start;
                let dateEnd = req.body.date_end;
                let priority = req.body.priority;
                let status = req.body.status;
                let updated = req.body.updated;
                let responsible = req.body.responsible;
                let description = req.body.description;

                let rearrangeStart =  dateStart.split('.')
                let rearrangeEnd =  dateEnd.split('.')
                let rearrangeUpdated = updated.split('.')

                dateStart = ''
                dateEnd = ''
                updated = ''
                for (let k = 2; k > -1; k--) {
                    if (k === 0) {
                        dateStart += rearrangeStart[k]
                    }
                    else {
                        dateStart += rearrangeStart[k] +'.'
                    }
                }

                for (let l = 2; l > -1; l--) {
                    if (l === 0) {
                        dateEnd += rearrangeEnd[l]
                    }
                    else {
                        dateEnd += rearrangeEnd[l] +'.'
                    }
                }

                for (let j = 2; j > -1; j--) {
                    if (j === 0) {
                        updated += rearrangeUpdated[j]
                    }
                    else {
                        updated += rearrangeUpdated[j] +'.'
                    }
                }

                if (!(0 < taskHeader.length < 51 || 0 < description < 1201)) {
                    res.json({result: 'Некорректные данные'})
                } else if (dateStart.length !== 10 || dateEnd.length !== 10 || updated.length !== 10) {
                    res.json({result: 'Некорректные данные'})
                } else if (!(0 < priority.length < 21 || 0 < status.length < 21))  {
                    res.json({result: 'Некорректные данные'})
                }
                if (team[0][0]['adding'] === 'all') {
                    conn.query(`SELECT login FROM users WHERE id = "${req.session.userId}"`).then( user => {
                        conn.query(`INSERT INTO teamTasks (idUser, idTeam, taskHeader, dateStart, dateEnd, priority, status, updated, responsible, createdBy, description) 
                        VALUES ("${req.session.userId}", "${team[0][0]['id']}", "${taskHeader}", "${dateStart}", "${dateEnd}", "${priority}", "${status}", "${updated}", "${responsible}", "${user[0][0]['login']}", "${description}")`)
                            .then( () => {
                                console.log('Adding team task successful')
                                res.json({result: true})
                            })
                            .catch(err => {
                                console.log(err)
                                res.json({result: 'Произошла ошибка, повторите попытку позднее'})
                            })
                    }).catch( err => {
                        console.log(err)
                    })
                } else if (Number(team[0][0]['admin']) === Number(req.session.userId)) {
                    conn.query(`SELECT login FROM users WHERE id = "${req.session.userId}"`).then( user => {
                        conn.query(`INSERT INTO teamTasks (idUser, idTeam, taskHeader, dateStart, dateEnd, priority, status, updated, responsible, createdBy, description) 
                        VALUES ("${req.session.userId}", "${team[0][0]['id']}", "${taskHeader}", "${dateStart}", "${dateEnd}", "${priority}", "${status}", "${updated}", "${responsible}", "${user[0][0]['login']}", "${description}")`)
                            .then( () => {
                                console.log('Adding team task successful')
                                res.json({result: true})
                            })
                            .catch(err => {
                                console.log(err)
                                res.json({result: 'Произошла ошибка, повторите попытку позднее'})
                            })
                    }).catch( err => {
                        console.log(err)
                    })
                } else {
                    return () => {
                        res.json({result: 'Accessed is denied'});
                        res.sendStatus(403);
                    }
                }
            } else {
                return () => {
                    res.json({result: 'Accessed is denied'});
                    res.sendStatus(403);
                }
            }
        }
    })
}))

module.exports = router