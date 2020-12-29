const express = require('express');
const axios = require('axios')
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
    // console.log('req query title get', req.query.title);
    let movieTitle = req.body.query;
    axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: process.env.API_KEY,
            query: movieTitle,
            page: 1
        }
    })
    .then(response => {
        // console.log('res data data', response.data.results);
        res.send(response.data.results)
    })
    .catch(error => {
        console.log('error', error);
        res.sendStatus(500)
    })
});

module.exports = router;