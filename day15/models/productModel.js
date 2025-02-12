const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  description: String,
  title:{
    type:String,
    required: true,

  },
  price:{
    type:Number,
    required:true,
  },
  thumbmail:{
    type:String,
  },
  images:[],
  description:String,
  createdAt:{
    type:Date,
    default:Date.now(),
  },
  updatedAt:{
    type:Date,
    default:Date.now(),
  },
});

const productModel = mongoose.model("product",productSchema);

module.exports={
  productModel
}