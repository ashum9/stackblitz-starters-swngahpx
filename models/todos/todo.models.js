import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  content : {
    type : String ,
    required : true ,
  },
  complete : {
    type : Boolean,
    default : false 
  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId, // ise ye pata chalta hai 
    //  ki ab ham koi reference dene wale hai , and iske just
    // baad wale line me hume ref dena hota hai 
    ref : "User" // whi dena hai jo model me dia hai
  },
  subTodos : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : " subtodo"
    }
  ] // array of subtodos 
} , {timestamps:true})

export const Todo = mongoose.model("todo", todoSchema)
