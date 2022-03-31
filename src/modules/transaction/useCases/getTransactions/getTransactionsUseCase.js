const Model = require('../../models/transactionModel')


class GetTransactionUseCase{
    constructor(){

    };
    async execute( ){
        
        
        const get = await Model.find({})
        console.log(get)
        return get 
    }
   
}



module.exports = GetTransactionUseCase;