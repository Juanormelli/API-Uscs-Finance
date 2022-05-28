const Model = require('../../../transaction/models/transactionModel')



class DeleteTransactionUseCase{
    constructor(){

    };
    async execute(id ){
        
       
        let result=''
        const deleteTransaction = await Model.deleteOne({ _id: id }).then(result=>{return result}).catch(error=>{return error});
        
        console.log("Aqui")
        if (deleteTransaction.deletedCount !== 0){
            result = {message:'Deleted transaction'}
        }
        else{
            result = {message: 'Transaction does not'}


        }
        return result
    }
   
}



module.exports = DeleteTransactionUseCase;