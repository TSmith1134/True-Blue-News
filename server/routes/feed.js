const express = require('express')
const router = express.Router()
const getFeed = require('../controllers/feedController')

router.get('/:filter', getFeed)

module.exports = router