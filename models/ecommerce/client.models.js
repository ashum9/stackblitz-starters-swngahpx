import mongoose from "mongoose"

const clientSchema = new mongoose.Schema({
  username : {
    type : String,
    unique : true ,
    lowercase : true ,
    required : true 
  },
  email : {
    type : String,
    unique : true ,
    lowercase : true ,
    required : true 
  },
  passward : {
    required : true ,
    type : String
  }
},{timestamps:true})

export const client = mongoose.model("client", clientSchema)