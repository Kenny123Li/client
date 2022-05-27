const {Pool, Client} = require('pg')
const pool = new Pool({
  user: 'test',
  host: 'localhost',
  database: 'firstdb',
  password: 'test',
  port: 5432,
});

pool.connect()

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('select * from testing123', (error, results) => {
        //console.log(error, results)
        if (error) {
          //alert("Did not get any merchants!")
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createMerchant = (body) => {
    return new Promise(function(resolve, reject) {
      const { name } = body
      pool.query('INSERT INTO testing123 (username) VALUES ($1) RETURNING *', [name], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`)
      })
    })
  }

  // const deleteMerchant = () => {
  //   return new Promise(function(resolve, reject) {
  //     const username = parseInt(express.request.params.username)
  //     console.log("username we are trying to delete: "+ username);
  //     pool.query('DELETE FROM testing123 WHERE username = $1', [username], (error, results) => {
  //       console.log(error);
  //       if (error) {
  //         reject(error)
  //       }
  //       resolve(`Merchant deleted with username: ${user}`)
  //     })
  //   })
  // }

  const deleteMerchant = (username_passed) => {
    return new Promise(function(resolve, reject) {
      const username = username_passed;
      console.log("username we are trying to delete: "+ username);
      pool.query('DELETE FROM testing123 WHERE username = $1', [username], (error, results) => {
        console.log(error);
        if (error) {
          reject(error)
        }
        resolve(`Merchant deleted with username: ${username}`)
      })
    })
  }
  
  module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
  }
  