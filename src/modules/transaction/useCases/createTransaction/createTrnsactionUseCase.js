const Model = require('../../../transaction/models/transactionModel')


class CreateTransactionUseCase{
    constructor(){

    };
    async execute(title, value, typeOfTransaction, description, date ){
        console.log(title, value, typeOfTransaction, description, date)
        const input = {
            title: title,
            value: value,
            transactionType: typeOfTransaction,
            description: description,
            date: date

        }
        
        const create = await Model.create(input)

        return create
    }
   
}



module.exports = CreateTransactionUseCase;