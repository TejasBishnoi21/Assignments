const express = require("express");
const userRouter = express.Router();
const { userModel } = require("../Model/users.model")


// Create=>
userRouter.post("/register", async (req, res)=>{
    try{
        const user = req.body
        console.log(user);
        const newUser = new userModel(user)
        await newUser.save()

        const username = user.name;
        res.send(`Dear ${username}, you are registered successfully`)
    }catch(err){
        res.send(err.message);
    }
})

// Read=>
userRouter.get("/", async (req, res)=>{
    let query = req.query;  // getting Dynamic Responses via query
    console.log(query);
    try{
        const users = await userModel.find(query);
        res.send(users)
    }catch(err){
        console.log(err.message);
    }
})

// Update=>
userRouter.patch("/update/:id", async (req, res)=>{
    const ID = req.params.id
    const payload = req.body;
    try{
        await userModel.findByIdAndUpdate({_id:ID},payload)
        res.send(`Details updated`)
    }catch(err){
        console.log(err);
    }
})

// Delete=>
userRouter.delete("/delete/:id", async (req, res)=>{
    const ID = req.params.id
    try{
        await userModel.findByIdAndDelete(ID)
        res.send(`User Deleted`)
    }catch(err){
        console.log(err);
    }
})

module.exports = { userRouter }