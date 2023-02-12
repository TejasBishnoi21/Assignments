const express = require("express");
const app = express();
const { connection, userModel } = require("./db")
app.use(express.json()) // Middleware

app.get("/", (req, res)=>{
    res.send("Welcome to HomePage")
})

// Create=>
app.post("/register", async (req, res)=>{
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
app.get("/users", async (req, res)=>{
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
app.patch("/update/:id", async (req, res)=>{
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
app.delete("/delete/:id", async (req, res)=>{
    const ID = req.params.id
    try{
        await userModel.findByIdAndDelete(ID)
        res.send(`User Deleted`)
    }catch(err){
        console.log(err);
    }
})


const port = 4500;
app.listen(port, async ()=>{
    try{
        await connection;
        console.log("connected to the DB");
    }catch(err){
        console.log("Unable to connect DB");
        console.log(err);
    }
    console.log(`server is running at port: ${port}`);
})