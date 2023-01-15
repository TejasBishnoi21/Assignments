import { Todo } from "../constants";

// interface TodoItemProps{
//     id:number;
//     title:string;
//     status:boolean;
// }

const TodoItem= ({id, title, status}:Todo)=>{
    return <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        border:'1px solid #ddd',
        margin:'auto',
        width:500,
        padding:20,
        }}>
        <h1>{title}</h1>
        <p>{status?"Completed":"Pending"}</p>
        <button>Toggle Status</button>
    </div>
}

export default TodoItem