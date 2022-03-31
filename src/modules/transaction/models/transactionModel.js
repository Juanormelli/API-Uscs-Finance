const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    
    title:{type:String, required:true},
    value:{type:Number, required:true, defaultValue:0},
    transactionType:{type:String, required:true, defaultValue:"deposit"},
    description:{type:String, required:true},
    date:{type:Number, required:true}


})

const model = mongoose.model('TransactionModel', TransactionSchema)


module.exports = model