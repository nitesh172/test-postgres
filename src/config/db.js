const Pool = require('pg').Pool;
require("dotenv").config()

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'bookstore',
//     password: 'root',
//     port: 5432
// })

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})


module.exports = pool;