import FilterComp from "../Components/FilterComp";
import Booklist from "../Components/Booklist";
import styled from 'styled-components';

const Books= ()=>{
    return(
        
            <BooksMainContainer >
                <FilterBox>
                    <FilterComp />
                </FilterBox>

                {/* <BooksBox> */}
                <div className="xyz" style={{
                    'padding':'10px',
                    'border':'1px solid #ddd',
                    'marginTop':80,
                    }}>
                    <Booklist />

                </div>
                {/* </BooksBox> */}
            </BooksMainContainer>

    )
};
const BooksMainContainer = styled.div`
display: flex;
gap:20px;
// border: 1px solid;
width: 98%;
margin: auto;
padding: 10px;
justify-content: space-around
`
const FilterBox = styled.div`
border: 1px solid #ddd;
width: 30%;
margin-top:80px;
padding: 10px;
`

export default Books;