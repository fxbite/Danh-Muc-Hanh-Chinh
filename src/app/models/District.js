const mongoose = require('mongoose')
const {Schema} = mongoose

const District = new Schema({
    level2_id: {type: String, maxLength: 600},
    name: { type: String, maxLength: 600 },
    type: { type: String, maxLength: 600 },
    level1_id: {type: String, maxLength: 600},
    cityName: { type: String, maxLength: 600 },

}, {timestamps: true})

module.exports = mongoose.model('District', District, 'district');