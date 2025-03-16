import mongoose from "mongoose"

const prodSchema = new mongoose.Schema({
  description : {
    type : String , 
    required : true 
  },
  name : {
    required : true ,
    type : String 
  },
  productImg : {
    type : String ,

  },
  price : {
    type : Number,
    default : 0 ,

  },
  stock : {
    type : Number ,
    default : 0 
  },
  category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "category",
    required : true
  },
  owner : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "client"
  }
},{timestamps:true})

export const products = mongoose.model("product", prodSchema)