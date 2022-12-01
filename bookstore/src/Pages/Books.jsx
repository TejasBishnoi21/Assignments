import FilterComp from "../Components/FilterComp";
import Booklist from "../Components/Booklist";
import styled from 'styled-components';
const Books= ()=>{
    return(
        
            <BooksMainContainer>
                <FilterBox>
                    <FilterComp />
                </FilterBox>

                {/* <BooksBox> */}
                <div className="xyz">
                    <Booklist />

                </div>
                {/* </BooksBox> */}
            </BooksMainContainer>

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
width: 30%;
padding: 10px;
`
const BooksBox = styled.div`
border: 1px solid blue;
width: 98%;
// padding:10px;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap:20px;
// justify-content: center
`

export default Books;