const mongoose = require('mongoose')
const {Schema} = mongoose

const City =  new Schema({
    level1_id: {type: String, maxLength: 600},
    name: { type: String, maxLength: 600 },
    type: { type: String, maxLength: 600 },

}, {timestamps: true})

module.exports = mongoose.model('City', City, 'city');