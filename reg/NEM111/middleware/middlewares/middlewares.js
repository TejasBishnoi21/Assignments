const fs = require("fs")

const routeLogger=((req, res, next)=>{
    next();
    fs.appendFileSync("./routeDetails.txt", `Route visited: ${req.url} | Method: ${req.method}\n`)
})

module.exports={routeLogger}