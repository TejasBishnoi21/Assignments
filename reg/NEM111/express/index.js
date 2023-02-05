const express = require("express")
const app = express(); // invoking express
app.use(express.json()) // middleware to convert json into object
// app.use(express.text()) // middleware to convert text
const fs = require("fs"); // filesystem to read file
const { type } = require("os");

// GET Request=>
app.get("/", (req, res)=>{
    res.setHeader("Content-type", "text/html")
    res.send("<h1>This is Homepage</h1>")
})
// Getting all the data present inside db.json=>
app.get("/data", (req, res)=>{
    const dataStream = fs.createReadStream("./db.json", "utf-8");  
    // createReadStream is used to handle huge data
    dataStream.pipe(res)
})
// Getting data of a specific route
app.get("/students", (req, res)=>{
    const data = fs.readFileSync("./db.json", {encoding:"utf-8"})
    const parsedData = JSON.parse(data);
    console.log(parsedData.students);
    res.send(parsedData.students)
})

// Post Requests=>
app.post("/add", (req, res)=>{
    console.log(req.body);
    res.send("Data added")
})
// Adding a student data to the db=>
app.post("/addstudent", (req, res)=>{
    // step-1. Read entire data=>
    const data = fs.readFileSync("./db.json", {encoding:"utf-8"})
    // step-2. Parse the data=>
    const parsedData = JSON.parse(data);
    // Add the incoming data to right location=>
    parsedData.students.push(req.body) // Why push? because parsedData.students is an array!
    // Now, we have the new data here and we need to store it inside db.json file
    // but, in db.json there's already some data present.
    // so, we need to over-right it [writeFileSync()]
    fs.writeFileSync("./db.json", JSON.stringify(parsedData))
    // console.log(parsedData);
    const user = req.body.name
    res.send(`${user} details added`)
})

// Delete Requests=>
app.delete("/delete", (req, res)=>{
    let user = req.body.name;
    // to delete any particular data, we need entire data
    // then we'll filter out all data so,
    // step-1. Read entire data=>
    const data = fs.readFileSync("./db.json", {encoding:"utf-8"})
    // step-2. Parse the data=>
    const parsedData = JSON.parse(data);
    // now that we have all data in modifiable format, we will match the id/name/details
    // using .filter() so, 
    const filteredData = parsedData.students.filter((el)=>{
        return el.name!= user
    })
    // this filteredData needs to be saved in db.json so,
    parsedData.students = filteredData; // [Reassigning new data]
    fs.writeFileSync("./db.json", JSON.stringify(parsedData))

    console.log(filteredData);
    res.send(`${user} details deleted`)
})

// Updating Details=>
app.patch("/update", (req, res)=>{
    let category = req.body.cat;
    let user = req.body.name;
    let new_age = req.body.age;
    // updating is similar to deleting. First we need entire data
    // then we'll filter out all data so,
    // step-1. Read entire data=>
    const data = fs.readFileSync("./db.json", {encoding:"utf-8"})
    // step-2. Parse the data=>
    const parsedData = JSON.parse(data);
    // now that we have all data in modifiable format, we will match the id/name/details
    // using .filter() so, 
    if(category==="students")
    {
        var filteredData = parsedData.students.filter((el)=>{
            if(el.name === user) el.age= new_age
            return el
        })
        parsedData.students = filteredData; // [Reassigning new data]
    }
    else if(category==="authors")
    {
        var filteredData = parsedData.authors.filter((el)=>{
            if(el.name === user) el.age= new_age
            return el
        })
        parsedData.authors = filteredData; // [Reassigning new data]
    }

    // this filteredData needs to be saved in db.json so,
    fs.writeFileSync("./db.json", JSON.stringify(parsedData))

    console.log(`${user} details updated`);
    res.send(`${user} details updated`)
})


let port = 3200;
app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`);
})