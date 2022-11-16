import { useState,useEffect } from "react";

const Counter = ()=>{
    const [count,setCount]=useState(2);

    console.log(1);
    useEffect(()=>{
        console.log(2); 

        return()=>{
            console.log(3)
        }
    },[count])

    useEffect(()=>{
        console.log(4); 

        return()=>{
            console.log(5)
        }
    },[count]);
    console.log(6);


    return (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button onClick={()=> setCount((prev)=> prev+1)}>
                Add
            </button>
        </div>
    )  
}

export default Counter