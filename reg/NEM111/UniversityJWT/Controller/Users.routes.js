const express = require("express");
const userRouter = express.Router();
const { userModel } = require("../Model/users.model")
var jwt = require('jsonwebtoken');
const { jwtVerifier } = require("../middlewares/jwt.students")
// Create=>
userRouter.post("/register", async (req, res)=>{
    try{
        const user = req.body
        const newUser = new userModel(user)
        await newUser.save()

        const username = user.name;
        res.send(`Dear ${username}, you are registered successfully`)
        console.log(`New user registered: ${username}`)
    }catch(err){
        res.send(err.message);
    }
})

userRouter.post("/login", async (req, res)=>{
    const {name, email} = req.body;
    var token = jwt.sign({ university: 'NEM' }, 'masai',{ expiresIn: '1h' });
    try{
        const user = await userModel.find({name, email})
        if(user.length>0)
        {
            res.send(`Welcome ${name}, your token is:${token}`)
        }
        else res.send(`User not found`)
    }catch(err){
        res.send(err.message);
    }
})

// Read=>
userRouter.get("/", (req, res)=>{
    // getting Dynamic Responses via query
    let query = req.query; 
    const token = req.headers.auth;
    jwt.verify(token, 'masai', async (err, decoded)=>{
        if(decoded)
        {
            try{
                const users = await userModel.find(query);
                res.send(users)
            }catch(err){
                res.send(err.message);
            }
        }
        else res.send(err.message)
      });
})

// Update=>
userRouter.use(jwtVerifier);

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