const express = require("express")
const app = express(); // invoking express
app.use(express.json()) // middleware to convert json into object
// app.use(express.text()) // middleware to get text inside body
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
    const data = fs.readFileSync("./db.json", {encoding:"utf-8"})
    const parsedData = JSON.parse(data);
    parsedData.students.push(req.body) 
    fs.writeFileSync("./db.json", JSON.stringify(parsedData))

    const user = req.body.name
    res.send(`${user} details added`)
})

// Delete Requests=>
app.delete("/delete", (req, res)=>{
    let user = req.body.name;
    const data = fs.readFileSync("./db.json", {encoding:"utf-8"})
    const parsedData = JSON.parse(data);
    const filteredData = parsedData.students.filter((el)=>{
        return el.name!= user
    })
    parsedData.students = filteredData; // [Reassigning new data]
    fs.writeFileSync("./db.json", JSON.stringify(parsedData))

    console.log(filteredData);
    res.send(`${user} details deleted`)
})

// Updating Details=>
app.patch("/update", (req, res)=>{
    let category = req.body.cat;
    let user = req.body.name;
    let new_age = req.body.age; // updating age of user
    
    const data = fs.readFileSync("./db.json", {encoding:"utf-8"})
    const parsedData = JSON.parse(data);
    if(category==="students")
    {
        var filteredData = parsedData.students.filter((el)=>{
            if(el.name === user) el.age= new_age
            return el
        })
        parsedData.students = filteredData; 
    }
    else if(category==="authors")
    {
        var filteredData = parsedData.authors.filter((el)=>{
            if(el.name === user) el.age= new_age
            return el
        })
        parsedData.authors = filteredData;
    }

    fs.writeFileSync("./db.json", JSON.stringify(parsedData))

    console.log(`${user} details updated`);
    res.send(`${user} details updated`)
})


let port = 3200;
app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`);
})