const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
// gets data from the movie database api
// about queried actor/actress
router.get('/', (req, res) => {
    let personName = req.body.name;
    axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/person',
        params: {
        api_key: process.env.API_KEY,
        query: personName,
        page: 1
        }
    })
    .then(response => {
        console.log('res', response.data.results);
        res.send(response.data.results)
    })
    .catch(error => {
        console.log('error', error);
        res.sendStatus(500)
    })
});

module.exports = router;