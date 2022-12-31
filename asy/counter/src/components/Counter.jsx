import { useState } from "react";


const Counter = ()=>{
    const [count, setCount] = useState(0);

    function add(){
        setCount((prev)=>prev+1)
    };
    
    const subs = ()=>{
        setCount((prev)=>prev-1)
    }
    const double = ()=>{
        setCount((prev)=>prev*2)
    }

    return <>
        <div>
            <h2 data-testid='counter-header'>Counter</h2>
            <h1 style={{'fontFamily':'monospace'}} data-testid='count'>{count}</h1>
            <button data-testid='add-btn' onClick={()=>add()}>+</button>
            <button disabled={count <=0} data-testid='subtract-btn' onClick={()=>subs()}>-</button>
            <button data-testid='double-btn' onClick={()=>double()}>Double</button>

            <div>
                <button onClick={()=> setCount(0)}>Reset</button>
            </div>

        </div>
    </>
}

export default Counter;