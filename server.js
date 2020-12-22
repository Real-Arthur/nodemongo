require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())
// route /movie gets all users information
const moviesRouter = require('./routes/movies')
app.use('/movies', moviesRouter)
// route /user gets user information by username
const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(3000, () => console.log('server started'))