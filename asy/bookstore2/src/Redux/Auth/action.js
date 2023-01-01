import axios from 'axios';
import * as types from './actionTypes';


const loginReq = ()=>{
    return{
        type: types.LOGIN_REQUEST
    }
}
const loginSuc = (payload)=>{
    return{
        type: types.LOGIN_SUCCESS,
        payload
    }
}
const loginErr = ()=>{
    return{
        type: types.LOGIN_ERROR
    }
}

function getLogin(userData){

    return function(dispatch){
        dispatch(loginReq())
        return(
            axios.post("https://reqres.in/api/login", userData).then(r=>{
                dispatch(loginSuc(r.data.token))
                // console.log(r.data.token);
            }).catch(e=>{
                dispatch(loginErr())
            })
        )
    }
}
export default getLogin;

// https://reqres.in/api/login
