const express = require("express");
const app = express();
const { connection } = require("./db")
const { todoRouter } = require("./Routes/todos.routes")

app.use(express.json()) // Middleware

app.get("/", (req, res)=>{
    console.log("User is at Homepage");
    res.send("Welcome to Homepage")
})

app.use("/todos", todoRouter)




const port = 3200;
app.listen(port, async ()=>{
    try{
        await connection;
        console.log("Connected to DB");
    }catch{
        console.log("Unable to connect to DB");
    }
    console.log(`server is running at port: ${port}`);
})