import mongoose,{ Schema } from "mongoose";


const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    location:{
        type:String,
        required:true,
        trim:true,
    },
    contactNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    profileImage:{
        type:String,
    },

},{timestamps:true});


export const User = mongoose.models.User|| mongoose.model("User",userSchema);