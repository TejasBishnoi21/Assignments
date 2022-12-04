import { forwardRef } from "react";

const PinInput = forwardRef(
    ({onChangeHandler,backspaceHandler},ref)=>{
    const handleKey = (e)=>{
        if(e.keyCode===8) backspaceHandler(e);
        else onChangeHandler(e);
    }
    return(
        <input
        ref={ref}
        maxLength={1}
        onKeyUp={handleKey}
        />
    );
});

export default PinInput;