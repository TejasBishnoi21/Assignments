
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import countries from './countries';

function App() {
  const [query,setQuery]=useState("");
  const [suggestions,setSuggestions]=useState([])
  const queryHandler = useCallback((val) =>{
   setQuery(val)
  },[]);

  useEffect(()=>{
    if(query===""){
      setSuggestions([])
    }
    else {
      let textQuery = query.trim().toLowerCase();
      let filterData = countries.filter((el)=>{
        return el.country.toLowerCase().indexOf(textQuery)!== -1? true :false
      }).map((obj)=>obj.country)
      setSuggestions(filterData)
      console.log(suggestions,"qqq")
    }
  },[query])
  return (
    <div className="App">
       <div>
          <h2>Search Bar</h2>
          <h3>Search Bar Query: {query}</h3>
          <SearchBar queryHandler={queryHandler} suggestions={suggestions} />
       </div>
    </div>
  );
}

export default App;
