import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import getBooks from "../Redux/action"
import BookCard from "./BookCard"
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

const Booklist= ()=>{
    const books= useSelector((store)=> store.books)
    const dispatch= useDispatch();
    const location = useLocation();
    // console.log(location);
    const [searchParams]= useSearchParams()

    useEffect(()=>{
        if(location || books.length===0){
            const sortBy = searchParams.get('sort');
            const getBooksParams = {
                params: {
                    category: searchParams.getAll('category'),
                    _sort: sortBy && 'release_year',
                    _order: sortBy,
                },
            };
            dispatch(getBooks(getBooksParams))
        }
    },[location.search]);

    return(
        <div style={{width:1200,'margin':'auto',display: 'grid','gap':10,gridTemplateColumns:'repeat(4,1fr)'}}>
            {
                books.length>0 && books.map(singleBook =>{
                    return <BookWrapper key={singleBook.id}>
                        <BookCard bookData={singleBook}/>
                    </BookWrapper> 
                })
            }
        </div>
    )
}

const BookWrapper = styled.div`
// width: 100%;
border: 1px solid #ddd;
margin-bottom: 20px;
padding: 10px`

export default Booklist