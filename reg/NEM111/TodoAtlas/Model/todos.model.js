const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title : {type:String, required:true},
    priority: {type:String, required:true},
    status: {type:Boolean, required:true}
},{
    versionKey:false
})

const todoModel = mongoose.model("task", todoSchema)

module.exports = { todoModel };

