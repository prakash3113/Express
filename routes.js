const express = require('express')
const userController = require('./userController')

const router = express.Router()

router.route('/api/v1/newpage').post(userController)

module.exports = router