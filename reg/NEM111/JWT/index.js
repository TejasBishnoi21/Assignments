const express = require("express");
const app = express();
app.use(express.json());
const { connection } = require("./config/db");
const { UserModel } = require("./model/user.model");
const jwt = require("jsonwebtoken");

app.get("/", (req, res)=>{
    res.send("Welcome to homepage")
})

app.post("/register", async (req, res)=>{
    const userDetails = req.body;
    const user_name = req.body.name;
    try{
        const newUser = new UserModel(userDetails);
        await newUser.save("User registered")
        
        res.send(`Dear ${user_name}, you are registered successfully`)
        console.log(`New user registered: ${user_name}`)
    }catch(err){
        console.log({"messg":"Error while registering user", "err":err.message});
    }
})

app.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    var token = jwt.sign({ course: 'NEM' }, 'masai');
    try{
        const user = await UserModel.find({email,password})
        if(user.length>0) res.send(`Welcome ${user[0].name}, your token: ${token}`)
        else res.send("Invalid Credentials")
    }catch(err){
        res.send(err.message)
    }
})

app.get("/data", (req,res)=>{
    const token = req.headers.auth;
    // verify a token
    jwt.verify(token, 'masai', (err, decoded)=> {
    if(decoded) res.send("Welcome to Database")
    else res.send(err.message)
  });
})


const port = 4500;
app.listen(port, async(req, res)=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log("Can't connect to DB");
    }
    console.log(`server is running at port: ${port}`);
})