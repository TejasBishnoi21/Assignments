const express = require("express")
const fs = require("fs")
const {routeLogger} = require("./middlewares/middlewares.js")
const app = express()

const timeLogger=((req, res, next)=>{
    const startTime = new Date().getTime();
    next();
    const endTime = new Date().getTime();
    console.log(`response time: ${endTime-startTime}ms`);
})

app.use(timeLogger)
app.use(routeLogger)

app.get("/", (req, res)=>{
    console.log("Welcome to Homepage")
    res.send("HOME PAGE")
})
app.get("/about", (req, res)=>{
    console.log("Welcome to About Me")
    res.send("ABOUT PAGE")
})
app.get("/contacts", (req, res)=>{
    console.log("Welcome to Contacts")
    res.send("CONTACTS PAGE")
})
app.get("/data", (req, res)=>{
    console.log("Welcome to Data Center")
    res.send("Data will be shared")
})

app.listen(4500, ()=>{
    console.log("Server is running on port 4500")
})