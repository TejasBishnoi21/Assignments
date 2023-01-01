import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import getBooks, { editBook } from "../Redux/Books/action";


const EditBook= ()=>{
    const {id} = useParams();
    // console.log(id);
    const books = useSelector((store)=> store.bookReducer.books);
    // console.log(books);
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        const bookData = books.find((el)=>el.id=== +id)

        if(bookData)
        {
            setAuthor(bookData.author);
            setTitle(bookData.book_name);
        }

    },[])

    const handleSubmit = ()=>{
        const newUserData = {
            book_name: title,
            author
        }

        dispatch(editBook(id, newUserData)).then(()=> dispatch(getBooks()))
        navigate("/")
    }


    return <div>
        <h1>Edit Book Page</h1>

        <div>
            <label>Author: </label>
            <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
        </div>

        <div>
            <label>Title: </label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        
        <button onClick={handleSubmit}>Submit</button>

        
    </div>
}

export default EditBook;