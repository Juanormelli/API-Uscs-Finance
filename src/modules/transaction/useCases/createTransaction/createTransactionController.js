const CreateTransactionUseCase = require('./createTrnsactionUseCase')

class CreateTransactionController{
    async handle(req,res){
        const createTransactionUseCase = new CreateTransactionUseCase();
        console.log(createTransactionUseCase)

        
        const {title, value, typeOfTransaction, description, date }= req.body;

        console.log(req.body)

        const result = await createTransactionUseCase.execute(title, value, typeOfTransaction, description, date)

        if (result.error) {
            return res.status(400).json(result)
        }
        return res.json(result);




    }
}


module.exports = CreateTransactionController