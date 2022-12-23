import * as types from './actionTypes'

export const add = (payload)=>{
    return {type:types.ADD, payload}
}
export const subs = (payload)=>{
    return {type:types.REDUCE, payload}
}