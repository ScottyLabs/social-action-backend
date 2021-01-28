const express = require('express')

const BusinessCtrl = require('../controller/business-ctrl')

const router = express.Router()

router.post('/business', BusinessCtrl.createBusiness)
router.put('/business/:id', BusinessCtrl.updateBusiness)
router.delete('/business/:id', BusinessCtrl.deleteBusiness)
router.get('/business/:id', BusinessCtrl.getBusinessById)
router.get('/businesses', BusinessCtrl.getBusinesses)
router.get('/businesses/get', BusinessCtrl.pipe)

module.exports = router