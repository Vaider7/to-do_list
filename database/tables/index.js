const users = require('./users')
const sessions = require('./sessions')
const tasks = require('./tasks')
const teams = require('./teams')
const teamTasks = require('./tasksTeam')

module.exports = [
    users,
    sessions,
    tasks,
    teams,
    teamTasks
]