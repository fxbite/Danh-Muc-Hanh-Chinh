const unitsRouter = require('./units')


function route(app){

    app.use('/unit', unitsRouter)
}

module.exports = route;