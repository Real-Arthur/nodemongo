require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// uses mongoose to connect to mongo database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
// middleware
app.use(express.json())
// route for all users information, adding or deleting
const adminRouter = require('./routes/user.admin')
app.use('/db/admin', adminRouter)
// route gets user information by username
const userRouter = require('./routes/user.library')
app.use('/db/user', userRouter)
// route /api/person
const personRouter = require('./routes/api.person')
app.use('/api/person', personRouter)
// connect to port 3000 with confirmation log
app.listen(3000, () => console.log('server started'))