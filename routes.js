const express = require('express')
const userController = require('./userController')
const getMethod = require('./getController')

const router = express.Router()

router.route('/api/v1/newpage').post(userController)

router.route('/').get(getMethod)



module.exports = router