const express = require('express')
const router = express.Router()

const unitsController = require('../app/controllers/UnitsControllers')

router.get('/city', unitsController.getCity);
router.get('/district/:id', unitsController.getDistrict)
router.get('/ward/:id', unitsController.getWard)

module.exports = router;