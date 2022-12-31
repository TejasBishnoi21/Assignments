import axios from "axios";
import { useDispatch } from "react-redux";
import * as types from './actionTypes';
const getBooksReq = ()=>{
    return{
        type: types.GET_BOOKS_REQUEST
    }
}
const getBooksSuc = (payload)=>{
    return{
        type: types.GET_BOOKS_SUCCESS,
        payload
    }
}
const getBooksErr = ()=>{
    return{
        type: types.GET_BOOKS_ERROR
    }
}
function getBooks(params){
    return function(dispatch){
        dispatch(getBooksReq())
        return(
            axios.get("http://localhost:8080/books", params).then(r=>{
                dispatch(getBooksSuc(r.data))
            }).catch(e=>{
                dispatch(getBooksErr())
            })
        )
    }
}
export default getBooks