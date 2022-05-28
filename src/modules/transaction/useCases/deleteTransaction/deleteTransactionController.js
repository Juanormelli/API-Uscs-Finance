const DeleteTransactionUseCase = require('./deleteTransactionUseCase')

class DeleteTransactionController{
    async handle(req,res){
        const deleteTransactionUseCase = new DeleteTransactionUseCase();
        
        const del = req.params.id

        console.log(del)
        const result = await deleteTransactionUseCase.execute(del)
        
        console.log(result)
        if (result.error) {
            return res.status(400).json(result)
        }
        return res.json(result);

       
    }
}


module.exports = DeleteTransactionController