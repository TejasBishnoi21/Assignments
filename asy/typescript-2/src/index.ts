
// Problem 1:-

type InterFace = {id:number,title:string,status:boolean}

let objInterFace : InterFace = {
    id : 1,
    title : "Coding",
    status : true
}



// Problem 2:-

// type GetName = {firstName: string,lastName?: string};

function getName(firstName: string,lastName?: string):string{
   return `${firstName} ${lastName || ""}`;
}

console.log(getName("Ravinder","Kumar"))



// Problem 3:-

type Address = {houseNumber:number,street:(number | string),city:string,state:string,postalCode:(string | number),country:string};

let addressObj : Address = {
    houseNumber : 123,
    street : 12,
    city : "Hisar",
    state : "Haryana",
    postalCode : 234543,
    country : "India"
}




// Problem 4:-

type PersonDetails = {
    Prefix?:string,phones:number[],address:(number | string)[],email?:string,firstName:string,lastName:string,middleName?:string
}

let personDetails : PersonDetails = {
    // Prefix : 'abc',node index.js
    phones : [123456,123456,123466],
    address : ["Gandhi-nagar",'Boisar',"NewDelhi",123],
    email : "abc@gmail.com",
    firstName : "Ravinder",
    lastName : "Jangra",
    // middleName : "Kumar"
}


// Problem 5:-

type PersonDetails2 = {
    
}

function phoneBook () {

}