const mongoose = require('mongoose')

async function connect() {
    
    const URI = process.env.URI_MONGODB;
    
    try {
        await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`DB connected successfully`)
    } catch (error) {
        console.log(`Connect failed !!! `)
    }
    

}

module.exports = { connect };