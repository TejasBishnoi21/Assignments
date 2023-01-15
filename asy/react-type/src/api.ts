import axios, {AxiosResponse} from "axios"
import { Todo } from "./constants";

export const getTodos = async ()=>{
    let res: AxiosResponse<Todo[]> = await axios.get("http://localhost:8080/todo");
    return res.data;
}

export const addTodo = async (title:string)=>{
    let res = await axios.post("http://localhost:8080/todo",{
        title,
        status:false,
    })

    return res.data
};

export const toggleTodo = async (id:number, status:boolean)=>{

};