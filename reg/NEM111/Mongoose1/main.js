const mongoose = require("mongoose");

const main = async ()=>{
    try{
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/studentData");
        console.log("Connected to mongoDB");
        
        // CREATE =>
        // await StudentModel.insertMany([{name:'Vikky', age:26, city:'Mumbai'}])

        // DELETE => 
        // await StudentModel.findOneAndDelete({name:"Rahul"}) // Deletes just one doc 
        // await StudentModel.remove({name: "Rahul"}, {justOne: true}) // Deletes all docs named Rahul
        // console.log("Deleted the Data");

        // UPDATE => 
        await StudentModel.updateOne({name:"Rahul"}, {$set : {city:"Bangalore"}})

        // Read
        const students = await StudentModel.find()
        console.log(students)

        // connection.disconnect();     // Disconnecting connection
        // console.log("Disconnected from DB");
    }catch(err){
        console.log(err);
    }
}

main()

// Data Structuring => 
const studentSchema = mongoose.Schema({
    name: {type: String, required:true},  // here we need to define it's type 
    age: {type: Number, required:true},  // as well as it's required/not-required
    city: String                        // This is known as Validation 
},{
    versionKey : false
})
const StudentModel = mongoose.model("student", studentSchema)