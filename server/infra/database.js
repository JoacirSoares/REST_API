const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: '123789',
    host: 'localhost',
    port: 5432,
    database: 'rest_api'
})

module.exports = db;