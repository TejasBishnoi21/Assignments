import { add, subs } from "../Redux/action";
import store from "../Redux/store";

const CounterButtons = ()=>{
    const {dispatch} = store;
    
    return <>
        <div>
            <button onClick={()=>dispatch(add(1))}>ADD</button>
            <button onClick={()=>dispatch(subs(1))}>REDUCE</button>
        </div>
    </>
}

export default CounterButtons;