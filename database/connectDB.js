const mysql = require('mysql2');
const config = require('../config/config')
const session = require('express-session');

const conn = mysql.createConnection(config.MYSQL_CONFIG).promise();

module.exports = conn