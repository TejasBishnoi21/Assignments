import * as types from './actionTypes';

const reducer = (state, action)=>{
    const {type,payload} = action;

    switch(type){
        case types.ADD:
            return {...state, count: state.count + payload};
        case types.REDUCE:
                return {...state, count: state.count - payload};
        default:
            return state;
    }
}

export default reducer;