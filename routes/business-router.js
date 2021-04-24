const express = require('express')

const BusinessCtrl = require('../controller/business-ctrl')

const router = express.Router()

router.get('/business', BusinessCtrl.pipe)
router.get('/', BusinessCtrl.getBusinesses)

module.exports = router