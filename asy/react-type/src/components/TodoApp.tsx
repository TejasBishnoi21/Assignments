import { useEffect, useState } from "react";
import { getTodos } from "../api";
import { Todo } from "../constants";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";


const TodoApp = ()=>{
    const [todos, setTodos] = useState<Todo[]>([])
    const onAdd = (newTodo: Todo)=>{
        setTodos([...todos, newTodo]);
    }
    useEffect(()=>{
        getTodos().then((res)=>{
            // console.log(res)
            setTodos(res)
        })
    },[])
    return <div>
        <h1>TodoApp</h1>
        <p>Built using TypeScipt and React</p>
        <TodoInput onAdd={onAdd}/>
        <br /><br />
        {
            todos?.map((el)=>{
                return <div style={{
                    margin:'auto',
                    display:'flex',
                }} key={el.id}>
                    <TodoItem {...el}/>
                </div>
            })
        }
    </div>
}

export default TodoApp;