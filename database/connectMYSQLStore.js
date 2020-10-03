const config = require('../config/config')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session)
const conn = require('./connectDB')
const sessionStore = new MySQLStore(config.STORE_OPTIONS, conn)

module.exports = sessionStore