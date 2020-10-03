const express = require('express');
const router = express.Router();
const session = require('express-session');
const conn = require('../database/connectDB');

router.post('/data', ((req, res) => {
    if (!req.session.userId) return () => {
        res.json({result: 'Accessed is denied'});
        res.sendStatus(403);
    }

        let taskHeader = req.body.task_header;
        let dateStart = req.body.date_start;
        let dateEnd = req.body.date_end;
        let priority = req.body.priority;
        let status = req.body.status;
        let updated = req.body.updated;
        let description = req.body.description;


        console.log(taskHeader)
        console.log(dateStart)
        console.log(dateEnd)
        console.log(priority)
        console.log(status)
        console.log(updated)
        console.log(description)

        if (!(0 < taskHeader.length < 51 || 0 < description < 1201)) {
            console.log('shit header')
            res.json({result: 'Некорректные данные'})
        } else if (dateStart.length !== 10 || dateEnd.length !== 10 || update.length !== 10) {
            res.json({result: 'Некорректные данные'})
            console.log('shit date')
        } else if (!(0 < priority.length < 21 || 0 < status.length < 21))  {
            res.json({result: 'Некорректные данные'})
            console.log('shit priority')
        } else {
            conn.query(`INSERT INTO tasks (idUser, taskHeader, dateStart, dateEnd, priority, status, updated, description) 
            VALUES ("${req.session.userId}", "${taskHeader}", "${dateStart}", "${dateEnd}", "${priority}", "${status}", "${updated}", "${description}")`)
                .then( () => {
                        console.log('Adding task successful')
                    res.json({result: true})
                })
                .catch(err => {
                    console.log(err)
                    res.json({result: 'Произошла ошибка, повторите попытку позднее'})
                })
            }

    })
)

module.exports = router