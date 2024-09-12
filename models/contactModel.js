const mongoose = require("mongoose");

const contactSchema = mongoose.Schema( {
    name:{
        type:String,
        required: [true , "please Add your name"]
    },
    email:{
        type:String,
        required: [true , "please Add your email"]
    },
    phone:{
        type:Number,
        required: [true , "please Add your Number"]
    },
} , {timestamps:true})

module.exports = mongoose.model("Contact" , contactSchema)