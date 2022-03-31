const {Router} = require('express')
const CreateTransactionController = require('../../../modules/transaction/useCases/createTransaction/createTransactionController')

const createTransactionController = new CreateTransactionController()


const transactionRoutes = Router()


transactionRoutes.post('/', createTransactionController.handle)


module.exports = transactionRoutes;
