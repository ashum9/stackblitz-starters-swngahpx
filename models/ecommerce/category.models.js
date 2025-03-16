import mongoose from "mongoose"

const catSchema = new mongoose.Schema({
  name : {
    type : string ,
    required : true 
  }
},{timestamps:true})

export const category = mongoose.model("category",catSchema )