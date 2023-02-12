const mongoose = require("mongoose");


const connection = mongoose.connect("mongodb://127.0.0.1:27017/hospital");



// Data Structure for DB =>
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    age : {type: Number, required: true}
},{
    versionKey: false
})

// Model for the data=>
const userModel = mongoose.model("user", userSchema) // this will create new Collection


module.exports={ connection, userModel };