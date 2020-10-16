module.exports = {
    PORT: 3000,
    MYSQL_CONFIG: {
        host: "127.0.0.1",
        user: "test",
        database: "to-do_list",
        password: "Qwerty12345",
        port: "3306"
},
    SECRET_CODE_SESSION: '5N2h3a4%vwL&xMN8sVBL6N$sT',
    STORE_OPTIONS: {
        clearExpired: true,
        checkExpirationInterval: 604800000,
        expiration: 2592000000,
        charset: 'utf8mb4_bin',
    }
};

// MYSQL_CONFIG: {
//     host: "127.0.0.1",
//         user: "test",
//         database: "to-do_list",
//         password: "Qwerty12345",
//         port: "3306"
// },

// MYSQL_CONFIG: {
//     host: "sql7.freemysqlhosting.net",
//         user: "sql7370959",
//         database: "sql7370959",
//         password: "J5kiHvmAee",
//         port: "3306"
// },