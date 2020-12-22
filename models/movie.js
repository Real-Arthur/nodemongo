const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    username: String,
    password: String,
    movies: []
});

module.exports = mongoose.model('movie', movieSchema, 'movie')