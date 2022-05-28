const {Router} = require('express')
const CreateTransactionController = require('../../../modules/transaction/useCases/createTransaction/createTransactionController')
const GetTransactionController = require('../../../modules/transaction/useCases/getTransactions/getTransactionsController')
const DeleteTransactionController = require('../../../modules/transaction/useCases/deleteTransaction/deleteTransactionController')
const UpdateTransactionController = require('../../../modules/transaction/useCases/updateTransaction/updateTransactionController')




const createTransactionController = new CreateTransactionController()
const getTransactionController = new GetTransactionController()
const deleteTransactionController = new DeleteTransactionController()
const updateTransactionController = new UpdateTransactionController()



const transactionRoutes = Router()


transactionRoutes.post('/createtransaction', createTransactionController.handle)
transactionRoutes.get('/', getTransactionController.handle)
transactionRoutes.delete('/deletetransaction/:id', deleteTransactionController.handle)
transactionRoutes.patch('/updatetransaction/:id', updateTransactionController.handle)


module.exports = transactionRoutes;
