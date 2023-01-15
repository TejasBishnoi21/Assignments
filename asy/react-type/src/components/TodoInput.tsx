import React, {useState } from "react";
import { addTodo } from "../api";
import { Todo } from "../constants";

type TodoInputPropType={
    onAdd: (a: Todo)=> void;
}

const TodoInput = (prop: TodoInputPropType)=>{
    const {onAdd}=prop;
    const [title,setTitle] = useState<string>('');
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
    const handleSubmit= async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let res = await addTodo(title);
        onAdd(res);
        setTitle("");
    }
    return <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={title}
            onChange={handleChange} />
            <button>Add Todo</button>
            </form>
        </div>
}

export default TodoInput;