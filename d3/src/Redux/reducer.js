const reducer = (oldState, action)=>{
    switch(action.type){
        case "ADD":
            return {...oldState, count: oldState.count+action.payload}
        case "REDUCE":
                return {...oldState, count: oldState.count-action.payload}
        default:
            return oldState;
    }
}

export {reducer}