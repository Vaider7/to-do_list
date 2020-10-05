const express = require('express');
const router = express.Router();
const conn = require('../database/connectDB');

router.post('/data', ((req, res) => {
    if (!req.session.userId) return () => {
        res.json({result: 'Accessed is denied'});
        res.sendStatus(403);
    }

    if (!req.body) return () => {
        res.json({result: 'Отправлена пустая форма'});
    }

    let taskHeader = req.body.task_header;
    let dateStart = req.body.date_start;
    let dateEnd = req.body.date_end;
    let priority = req.body.priority;
    let status = req.body.status;
    let updated = req.body.updated;
    let description = req.body.description;
    let idTask = req.body.idtask;

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
    } else {
        conn.query(`SELECT idTask, idUser FROM tasks WHERE idTask = "${idTask}"`)
            .then(task => {
                if (!(task[0][0]['idUser'] === req.session.userId)) {
                    res.json({result: 'Accessed is denied'});
                    res.sendStatus(403);
                } else {
                    conn.query(`UPDATE tasks SET taskHeader = "${taskHeader}", dateStart = "${dateStart}", dateEnd = "${dateEnd}", priority = "${priority}", status ="${status}", updated = "${updated}", description = "${description}" WHERE idTask = "${idTask}"`)
                        .then( () => {
                            console.log('Changing is successful')
                            res.json({result: true})
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
    }
}))

module.exports = router