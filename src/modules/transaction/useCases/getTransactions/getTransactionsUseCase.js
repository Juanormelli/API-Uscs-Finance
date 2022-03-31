const Model = require('../../models/transactionModel')


class GetTransactionUseCase{
    constructor(){

    };
    async execute( ){
        
        
        const get = await Model.find({}).maxTimeMS(500)
        .then(result => {return result})
        .catch(error => {
            const message = {
                error: error
            }
            return message
        })

        console.log(get)
        return get 
    }
   
}



module.exports = GetTransactionUseCase;