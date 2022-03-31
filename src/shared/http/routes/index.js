const {Router} = require('express')
const transactionRoutes= require('./transaction.routes')



const routes = Router()


routes.use("/transaction", transactionRoutes)



module.exports = routes