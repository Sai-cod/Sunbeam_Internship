const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')
const userRouter = express.Router()

userRouter.get('/',(req, res)=>{
    const sql = `SELECT * FROM users`
    pool.query(sql,(error, data)=>{
        res.send(result.createResult(error, data))
    })
})

userRouter.post('/', (req, res)=>{
    const sql = `INSERT INTO users(email, password, role) VALUES (?, ?, ?)`
    const {email, password, role} = req.body
    pool.query(sql, [email, password, role], (error, data)=>{
        res.send(result.createResult(error, data))
    })
})



module.exports = userRouter