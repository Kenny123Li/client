// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'test',
//   host: 'localhost',
//   database: 'firstdb',
//   password: 'test',
//   port: 5432,
// });

const {Pool, Client} = require('pg')
const pool = new Pool({
  user: 'test',
  host: 'localhost',
  database: 'firstdb',
  password: 'test',
  port: 5432,
});

pool.query('select * from testing123', (err, res) => {
    //console.log(err, res)
    pool.end()
})

const client = new Client({
    user: 'test',
    host: 'localhost',
    database: 'firstdb',
    password: 'test',
    port: 5432,
})

client.connect()

client.query('select * from testing123', (err, res)=> {
    console.log(err, res)
    client.end()
})