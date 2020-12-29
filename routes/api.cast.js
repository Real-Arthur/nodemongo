const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
// gets cast data from the movie database api
// about queried movie
router.get('/', (req, res) => {
    let movieToSearch = req.body.query
    // GET route code here
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieToSearch}/credits`,
      params: {
        api_key: process.env.API_KEY
      }
      }).then(response => {
        console.log('res data cast', response.data.cast);
        res.send(response.data.cast)
      }).catch(error => {
        console.log('error', error);
        res.sendStatus(500)
      })
  });

module.exports = router;