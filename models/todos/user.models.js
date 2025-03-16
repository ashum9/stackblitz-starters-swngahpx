import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username : {
      type: String ,
      required : true , // ye field hona hee chahiye
      unique : true , // like for unique username in instagram
      lowercase : true  // sab lowercase me ho jana hai  
    },
    email : {
      type : String ,
      required : true ,  
      unique : true ,
      lowercase : true 
    },
    passward : {
      type : String ,
      required : [true , "bhai nhi dalega to koi bhi tera acct khol ke ladki ko mssg kr dega"]
    },


  }, // pehla object jisme fields hai , like what data we are taking
  {timestamps:true} // secondary object to store timestamps
)

export const User = mongoose.model("User",userSchema)

// model convert ho jata hai plural me and lowecase me convert ho jata hai
// when it is stored in mongodatabase eg users

