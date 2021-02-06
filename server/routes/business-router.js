const express = require('express')

const BusinessCtrl = require('../controller/business-ctrl')

const router = express.Router()

router.get('/', BusinessCtrl.pipe)

module.exports = router