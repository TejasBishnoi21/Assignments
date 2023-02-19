const express = require("express");
const app = express() // Invoking express
app.use(express.json()) // Middleware
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.routes")
var jwt = require('jsonwebtoken');
const { employeeModel } = require("./models/employees.model");
const { jwtVerifier } = require("./middlewares/jwt.verifier")
const bcrypt = require('bcrypt');

app.get("/", (req, res)=>{
    res.send("Welcome to Homepage")
})

app.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    
    try{
        const user = await employeeModel.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result)=>{ 
                if(result)
                {
                    var token = jwt.sign({ ID: user[0]._id }, 'masai');
                    res.send(`Welcome ${user[0].name}, your token is: ${token}`)
                }
                else res.send(`Wrong Password`)
            });
        }
        else res.send("You are not registered user")
    }catch(err){
        res.send(err.message)
    }
})

app.use(jwtVerifier) // middleware for jwt
app.use("/employees", userRouter)


const port = 4800;
app.listen(port, async(req, res)=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log(err.message);
    }
    console.log(`server is running at port: ${port}`);
})


// Password Encryption => 41:00