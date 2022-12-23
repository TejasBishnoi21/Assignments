import { useState } from "react";
import store from "../Redux/store";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";

const Counter = ()=>{
    const { subscribe }=store;
    const [state, setState ] = useState(0);
    const forceUpdate = ( ) => setState(prev=>prev+1);
    
    subscribe(()=>{
        forceUpdate()
    })

    return <>
    <div>
        <h1>Counter Application</h1>
            <CounterValue/>
        <div>
            <CounterButtons/>
        </div>
        <p>This simple counter is created using Redux store</p>
    </div>
    </>
}

export default Counter;