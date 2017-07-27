'use strict'

var router = require('express').Router()

/* GET home page. */
router.route('/')
.get(
  function (req, res, next) {
    res.render('index', { title: 'Express' })
  }
)

module.exports = router