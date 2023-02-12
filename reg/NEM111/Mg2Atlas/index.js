const express = require("express");
const app = express();
const { connection } = require("./db")
const { userRouter } = require("./Controller/Users.routes")

app.use(express.json()) // Middleware

app.get("/", (req, res)=>{
    res.send("Welcome to HomePage")
})

app.use("/users", userRouter)  // default route for users

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