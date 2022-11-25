import * as types from './actionTypes'

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

const getBooks= ()=>dispatch=>{
    dispatch(getBooksReq())
    return axios.get('http://localhost:8080/books').then(r=>{
        dispatch(getBooksSuc(r.data))
    }).catch(e=>{
        dispatch(getBooksErr())
    })
}

export {getBooks};