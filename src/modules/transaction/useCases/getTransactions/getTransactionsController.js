const GetTransactionUseCase = require('./getTransactionsUseCase')

class GetTransactionController{
    async handle(req,res){
        const getTransactionUseCase = new GetTransactionUseCase();
    
        const result = await getTransactionUseCase.execute()
        console.log(result)

        return res.json(result);

    }
}


module.exports = GetTransactionController