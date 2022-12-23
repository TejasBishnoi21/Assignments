import { useState } from "react";
import store from "../Redux/store";

const CounterValue = ()=>{
    const { getState } = store;
    // console.log(getState().count);
    // const [forceRender, setForceRender] = useState(false);

    return <>
        <div>
            <h1>Count: {getState().count}</h1>
        </div>
    </>
}

export default CounterValue;
