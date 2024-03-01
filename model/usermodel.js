const mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    _id: {
        type: String
    },
    title: {
        type: String
    },
    pimage: {
        type: String
    },
    thumbnail: {
        type: String
    },
    images:{
        type:Array
    },
    price:{
        type:String
    },
    lastprice:{
        type:String
    },
    discountprince:{
        type: String
    },
    cashback:{
        type: String
    },
    avaibility:{
        type:Boolean
    },
    productdetail:{
        type:Array
    },
    warranty:{
        type:String
    },
    country:{
        type:String
    },
    manufacture:{
        type:String
    },
    color:{
        type:String
    },
    brand:{
        type:String
    },
    model:{
        type:String
    },
    series:{
        type:String
    },
    category:{
        type:String
    },
    qty:{
        type:Number
    }
})
module.exports = mongoose.model('User-data', userschema)
