const Model = require('../../models/transactionModel')


class UpdateTransactionUseCase{
    constructor(){

    };
    async execute( id,title, value, typeOfTransaction, description, date){
        
        
        const update = {
            title: title,
            value: value,
            transactionType: typeOfTransaction,
            description: description,
            date: date

        }


        const updateTransaction = await Model.findOneAndUpdate({_id:id}, update).then(result => {return result={message:"Atualizado"}}).catch(error => {return error })

        return updateTransaction
    }
   
}



module.exports = UpdateTransactionUseCase;