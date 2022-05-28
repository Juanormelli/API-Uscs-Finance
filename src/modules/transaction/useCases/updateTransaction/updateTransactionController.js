const UpdateTransactionUseCase = require('./updateTransactionUseCase')

class UpdateTransactionController{
    async handle(req,res){
        const updateTransactionUseCase = new UpdateTransactionUseCase();
        const {title, value, typeOfTransaction, description, date }= req.body;
        const id = req.params.id;

        

        const result = await updateTransactionUseCase.execute(id,title, value, typeOfTransaction, description, date)
        
        console.log(result)
        if (result.error) {
            return res.status(400).json(result)
        }
        return res.json(result);

       
    }
}


module.exports = UpdateTransactionController