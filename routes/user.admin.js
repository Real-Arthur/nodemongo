const express = require('express')
const router = express.Router()
const movie = require('../models/movie')

// gets all user's information
router.get('/', async (req, res) => {
    try {
       const movies = await movie.find()
       res.json(movies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// creates new user
router.post('/', async (req, res) => {
    try {
        await movie.create({
            username: req.body.username,
            password: req.body.password,
            movies: []
        })
        res.status(200).json({ message: 'User created'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// deletes a user
router.delete('/', async (req, res) => {
    try {
        await movie.deleteOne({
            username: req.body.username
        })
        res.status(200).json({ message: 'User deleted'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



module.exports = router