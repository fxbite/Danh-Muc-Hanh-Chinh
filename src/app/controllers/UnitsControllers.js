const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
const City = require('../models/City')
const District = require('../models/District')
const Ward = require('../models/Ward')

class UnitsController {


    // [GET] /unit/city
    getCity(req, res, next) {
        City.find({})
            .then(city => res.json(city))
            .catch(next);
    }

    // [GET] /unit/district/:level1_id
    getDistrict(req, res, next) {
        District.find({level1_id: req.params.id})
            .then(district => res.json(district))
            .catch(next)
    }

    // [GET] /unit/ward/:level2_id
    getWard(req, res ,next) {
        Ward.find({level2_id: req.params.id})
            .then(ward => res.json(ward))
            .catch(next)
    }
}

module.exports = new UnitsController;