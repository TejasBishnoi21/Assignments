import useTimeout from "../hooks/useTimeout"

const TimeoutComp = ()=>{
    const showText = useTimeout(4000);

    return <div>{showText && <div>TimeoutComp</div>}</div>
};

export default TimeoutComp;