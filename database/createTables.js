const tables = require('./tables/index')
const users = require('./tables/users')
const conn = require('./connectDB')

for (let table = 0; table < tables.length; table++) {
    conn.query(tables[table])
        .then(console.log('Tables is created'))
        .catch(err => {
            console.log(err)
        })
    }

conn.end()
