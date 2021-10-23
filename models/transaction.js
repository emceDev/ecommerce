const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const transactionSchema = new Schema({
    buyerName:{
        type:String,
        required:true,
    },
    sellerName:{
        type:String,
        required:true,
    },
    cart:{
        type:Array,
        required:true,
    },
})

mongoose.models = {};

var Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;