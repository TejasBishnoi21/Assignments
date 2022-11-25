import FilterComp from "../Components/FilterComp"
import Booklist from "../Components/Booklist"
import styled from 'styled-components'

const Books= ()=>{
    return(
        <div>
            <BooksMainContainer>
                <FilterComp />
                <Booklist />
            </BooksMainContainer>

        </div>
    )
};

const BooksMainContainer = styled.div`
display: flex;
border: 1px solid red; 
width: 25%;
justify-content: space-around
`

export default Books