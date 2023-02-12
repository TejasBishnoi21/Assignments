const express = require("express");
const app = express();
const { connection } = require("./db.js")


app.get("/", (req, res)=>{
    console.log("welcome to homepage");
    res.send("This is Homepage")
})

app.get("/users", (req, res)=>{
    res.send("Data will be shown here")
})

let port = 4600;
app.listen(port, async()=>{
    try{
        await connection;
         console.log(`connected to DB`);
    }catch(err){
        console.log(err);
    }
    console.log(`server is running at port: ${port}`);
})
