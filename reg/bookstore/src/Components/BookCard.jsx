
const BookCard= ({ bookData })=>{
    
    return(
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1553060146-71667aa3f223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="book" width={"100%"}/>
                <div>{bookData.book_name}</div>
                <div>{bookData.category}</div>
                <div>{bookData.release_year}</div>
                <div>{bookData.author}</div>
            </div>

            <button>Edit Details</button>
        </div>
    )
}

export default BookCard;