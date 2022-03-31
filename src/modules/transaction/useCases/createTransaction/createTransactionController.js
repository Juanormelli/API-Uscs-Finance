const CreateTransactionUseCase = require('./createTrnsactionUseCase')

class CreateTransactionController{
    async handle(req,res){
        const createTransactionUseCase = new CreateTransactionUseCase();
        console.log(createTransactionUseCase)

        
        const {title, value, typeOfTransaction, description, date }= req.body;

        const result = await createTransactionUseCase.execute(title, value, typeOfTransaction, description, date)
        console.log(result)

        return res.json(result);




    }
}


module.exports = CreateTransactionController