// Import mongoose=>
const mongoose = require("mongoose")

// Data Structure for DB =>
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    age : {type: Number, required: true},
    branch: {type: String, required:true},
    email:{type: String, required:true}
},{
    versionKey: false
})

// Model for the data=>
const userModel = mongoose.model("user", userSchema) 
// this will create new Collection

module.exports={ userModel }