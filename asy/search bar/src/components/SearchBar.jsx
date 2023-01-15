import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import {useThrottle} from "use-throttle"

const SearchBar = ({queryHandler,suggestions}) =>{
  const [input,setInput]=useState("");
  const [activeOption,setActiveOption]=useState(0)
  const scrollDiv = useRef();

  const handleActiveSuggestions = (e)=>{

    switch(e.keyCode){
        case 38 :
            if(activeOption===1){
                scrollDiv.current.scrollTop = suggestions.length*39;
                setActiveOption(suggestions.length)
            }else if(activeOption <= suggestions.length-3){
                scrollDiv.current.scrollTop-=39;
            }
            if(activeOption >1){
                setActiveOption((prev)=>prev-1)
            }
            break;
         case 40:
            if(activeOption === suggestions.length)    {
                scrollDiv.current.scrollTop = 0;
                setActiveOption(0)
            } else if (activeOption>=4){
                scrollDiv.current.scrollTop += 39
            }
            setActiveOption((prev)=>prev+1);
            break;

            default:
            return;
    }
  }
 
   const throttleText = useThrottle(input,1000)

    useEffect(()=>{
      queryHandler(throttleText)
    },[throttleText,queryHandler])
    console.log(suggestions)

  return<Wrapper onKeyUp={handleActiveSuggestions}>
    <SearchWrapper>
        <Input ref={scrollDiv} type="text" value={input} onChange={(e)=>setInput(e.target.value)}  />
    </SearchWrapper>
    
    <SuggetionBox 
      limit={5}
      suggestionsLength={suggestions.length}
     active={activeOption}
    >
            {
                suggestions.map((item,index)=>{
                    return (
                        <div key={index} onMouseOver={()=>setActiveOption(index + 1)}>
                            {item}
                        </div>
                    )
                })
            }
    </SuggetionBox>
    
  </Wrapper>

}
export default SearchBar;

const Wrapper = styled.div`
max-width:350px;
margin:auto;
`
const SearchWrapper = styled.div`
display:flex;
border:1px solid black;
`
const Input = styled.input`
flex:1;
font-size:20px;
border:none;
outline:none;
`

const SuggetionBox = styled.div`
 border:1px solid black;
 max-height: ${ ( {limit} )=>`${limit*39}px` }
 border-top-color:${(  {limit} )=>(limit? "transparent":"black")}
 border-bottom-color:${(  {suggestionsLength} )=>(suggestionsLength? "transparent":"black")};
 overflow:auto;

 & * {
    padding:10px;
    text-align:left;
    padding-left:20px;
 }
 & :nth-child(${({active})=> active}) {
    background: rgba(0,0,0,0.08);
    cursor:pointer;
 }
`