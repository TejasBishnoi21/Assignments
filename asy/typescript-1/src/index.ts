let name1: string = "Ravinder Kumar";
// console.log(name1)



let a: number = 12;
// console.log(a)



let isFetching : boolean = true;
// console.log(isFetching)



let arrOfNum : number[] = [1,2,3,4,5];
// console.log(arrOfNum);



let arrOfString: string[] = ["a","b","c","d"]
// console.log(arrOfString);



let tuple : [string,boolean] = ["Ravinder",true]
// console.log(tuple)



type Data = {User:string,SuperUser:string,Admin:string,SuperAdmin:string}

let details: Data = {
    User : "Ravinder Kumar",
    SuperUser : "Tejas Bishnoi",
    Admin : "Rahul Yadav",
    SuperAdmin : "Aakarsh"
}


// Product function

function products(x:number,y:number):number{
    return x*y
}

products(2,3)


// Division function

function division(x:number,y:number):number{
    return x*y
}

division(2,3)



// Print name function

function printName(name:string){
  console.log(name)
}
printName("Ravinder Kumar")


