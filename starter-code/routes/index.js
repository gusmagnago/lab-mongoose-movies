const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity')
const seeds = require('../bin/seeds')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    console.log('yay you just found the celebrities youv been looking for' + celebrity)
    res.render('celebrities/index', {celebrity})
  }) 
  .catch(error => {
    console.log('An error occurred when you tried to find the celebrities')
  })
})


module.exports = router;
