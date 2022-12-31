import { useState } from "react";
import PropTypes  from "prop-types";
import { useRef } from "react";
import PinInput from "./PinInput";

const Pin= ({length})=>{
    const[inputBox] = useState(new Array(length).fill(""));
    const inputRef = useRef([]);

    const onChangeHandler= (e,index)=>{
        if(e.target.value.length>0 && index<length-1){
            inputRef.current[index+1].focus();
        }
    };

    const backspaceHandler= (e,index)=>{
        if(index>0) inputRef.current[index-1].focus()
    };

    return(
    <div>
        {inputBox.map((item,index)=>{
            return(
                <PinInput
                ref={(inputRefElement)=>{
                    inputRef.current[index]=inputRefElement;
                }} 
                key={index}
                maxLength={1}
                onChangeHandler={(e)=>onChangeHandler(e,index)}
                backSpaceHandler={(e)=>backspaceHandler(e,index)}
                />
            )
        })}
    </div>
    );
}

export default Pin;

Pin.propTypes={
    length: PropTypes.number.isRequired,
};