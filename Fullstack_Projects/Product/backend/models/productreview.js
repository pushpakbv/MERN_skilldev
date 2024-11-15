const mongoose = require('mongoose');

const productreviewSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    }, 
    comment:{
        type:String,
        required:true
    }

})

const ProductReview = mongoose.model('ProductReview', productreviewSchema);
module.exports = ProductReview;