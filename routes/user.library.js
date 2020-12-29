const express = require('express')
const router = express.Router()
const movie = require('../models/movie')

// Gets username and movies by username
router.get('/:username', async (req, res) => {
    try {
       const movies = await movie.find({ 
        "username" : req.params.username
    }, 
    { 
        "username" : 1.0, 
        "movies" : 1.0
    })
       res.json(movies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// Adds a movie to a user's movie array
router.post('/:username', async (req, res) => {
    console.log('req', req.body);
    try {
        await movie.updateOne(
            { username: req.params.username },
            { $push: { movies: [ {
                "id": req.body.id,
                "title": req.body.title,
                "overview": req.body.overview,
                "release_date": req.body.release_date,
                "poster_path": req.body.poster_path,
            } ]}}
        )
        res.status(200).json({ message: 'Movie added'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// Removes a movie from a user's movie array
router.put('/:username', async (req, res) => {
    console.log('req', req.body);
    try {
        await movie.updateOne(
            { username: req.params.username },
            { $pull: { movies:
                {id : { $in: [ req.body.id ] }}
            }}
        )
        res.status(200).json({ message: 'Movie added'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router