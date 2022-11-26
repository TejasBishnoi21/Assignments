import FilterComp from "../Components/FilterComp";
import Booklist from "../Components/Booklist";
import styled from 'styled-components';

const Books= ()=>{
    return(
        <div>
            <BooksMainContainer>
                <FilterBox>
                    <FilterComp />
                </FilterBox>
                <BooksBox>
                    <Booklist />
                </BooksBox>
                
            </BooksMainContainer>

        </div>
    )
};

const BooksMainContainer = styled.div`
display: flex;
border: 1px solid red; 
width: 98%;
margin: auto;
padding: 10px;
justify-content: space-around
`

const FilterBox = styled.div`
border: 1px solid blue;
width: 20%;
padding: 10px;
`

const BooksBox = styled.div`
border: 1px solid blue;
width: 75%;
padding:10px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
grid-gap:20px;
justify-content: center
`

export default Books;