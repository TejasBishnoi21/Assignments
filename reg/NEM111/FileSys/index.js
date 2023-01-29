const argvs = process.argv;
const argv = argvs.slice(2);
// console.log(argv)
const operation = argv[0]
const a = argv[1];
const b = argv[2];

if(operation === "read"){
    const fs=require("fs");

    fs.readFile(`${a}`,{encoding:"utf-8"},(err,data)=>{
    if(err){
    console.log("Cannot read the file")
    console.log(err)
    } else {
    console.log(data)
    }
    })
    
}

if(operation === "append"){
    const fs=require("fs");
    
    fs.appendFile(`${b}`,`${a}\n`,(err)=>{
    if(err){
    console.log("Cannot read the file")
    console.log(err)
    } 
    })
}

if(operation === "create"){
    const fs=require("fs");
    
    fs.writeFile(`./${a}`,b,(err)=>{
    if(err){
    console.log("Cannot create file")
    console.log(err)
    }
    })
}
if(operation === "delete"){
    const fs=require("fs");
     fs.unlinkSync(`./${a}`)
}

if(operation === "rename"){
    const fs=require("fs");
    
    fs.rename(`${a}`,`${b}`,(err)=>{
    if(err){
    console.log("Cannot create file")
    console.log(err)
    }
    })
}
if(operation === "list"){
    const fs=require("fs");
    
    fs.readdir(`${a}`, (err, files)=>{
    if(err){
    console.log(err)
    }
    files.forEach((file)=>{
        console.log(file); 
      });
    })
}

