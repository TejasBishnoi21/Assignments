const express = require("express");
const todoRouter = express.Router();
const { todoModel } = require("../Model/todos.model");


// Create=>
todoRouter.post("/create", async (req, res)=>{
    try{
        const task = req.body;
        console.log(task);

        const newTask = new todoModel(task)
        await newTask.save();

        res.send("Task Added")
    }catch(err){
        console.log("Error in adding task");
        res.send(err.message);
    }
})

// Read=>
todoRouter.get("/", async (req, res)=>{
    const query = req.query // Dynamic queries
    console.log(query);
    try{
        const data = await todoModel.find(query)
        res.send(data)
    }catch(err){
        console.log("Error in getting details");
        res.send(err.message)
    }
})

// Update=>
todoRouter.patch("/:id", async (req, res)=>{
    const ID = req.params.id
    console.log(ID);
    const payload = req.body
    try{
        await todoModel.findByIdAndUpdate(ID, payload);
        const updated = await todoModel.findById(ID);
        res.send(updated)
    }catch(err){
        res.send(err.message)
    }
})

// Delete=>
todoRouter.delete("/:id", async (req, res)=>{
    const ID = req.params.id
    console.log(ID);
    try{
        await todoModel.findByIdAndDelete(ID);
        res.send("Deleted")
    }catch(err){
        res.send(err.message)
    }
})

module.exports = { todoRouter }