const {Router} = require('express')
const CreateTransactionController = require('../../../modules/transaction/useCases/createTransaction/createTransactionController')
const GetTransactionController = require('../../../modules/transaction/useCases/getTransactions/getTransactionsController')



const createTransactionController = new CreateTransactionController()
const getTransactionController = new GetTransactionController()

const transactionRoutes = Router()


transactionRoutes.post('/createtransaction', createTransactionController.handle)
transactionRoutes.get('/', getTransactionController.handle)


module.exports = transactionRoutes;
