import mongoose from "mongoose"

const orderItemsSchema = new mongoose.Schema({
  productId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "product"
  },
  quantity : {
    type : Number ,
    required : true ,
    default : 1 
  }
})

const addressSchema = new mongoose.Schema({
  type : String ,
  reuqired : true 
},{timestamps:true})

const orderSchema = new mongoose.Schema({
  orderPrice : {
    type : Number ,
    required : true
  },
  customer : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "client"
  },
  orderItems : {
    type : [orderItemsSchema]
  },
  address : [addressSchema],

  // ab iske baad order status dena hai 
  // like dispatch , shipping , out of delivery
  // we will give enum like choices
  status : {
    type : String ,
    enum : ["PENDING","CANCELLED","DELIVERED"],
    default : "PENDING"
  }
},{timestamps:true})

export const order = mongoose.model("order",orderSchema)