const { Router } = require('express')
const pool = require('../config/db')
const router = new Router()

router.get('/get', (req, res) => {
  pool.query('SELECT * from users', (error, results) => {
    if (error) {
      throw error
    } else {
      res.status(200).json(results.rows)
    }
  })
})

router.post('/create', (req, res) => {
  let { name, email, password } = req.body
  pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password],
    (error, results) => {
      if (error) {
        console.log(error)
      } else {
        res.status(201).json(results.rows[0])
      }
    }
  )
})

router.delete('/:id', (req, res) => {
  let { id } = req.params
  pool.query('DELETE FROM users WHERE id = $1;', [id], (error, results) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).json(results.rows)
    }
  })
})

module.exports = router
