import * as types from './actionTypes';

const initialState={
    token:"",
    isAuth:false,
    isLoading:false,
    isError:false,
}

const reducer = (oldState = initialState,{type, payload})=>{
    
    switch(type){
        case types.LOGIN_REQUEST:
            return {...oldState, isLoading:true};
        case types.LOGIN_SUCCESS:
            return {...oldState, isLoading:false, isAuth:true, token:payload};
        case types.LOGIN_ERROR:
            return {...oldState, isLoading:false, isError:true, isAuth:false};
        default:
            return oldState;
    }
}

export {reducer}

