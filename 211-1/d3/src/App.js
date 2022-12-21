import { useState } from 'react';
import './App.css';
import {store} from './Redux/store'

function App() {
  const {dispatch, getState, subscribe}= store;
  const {count}=store.getState();

  const [forceUpdate, setForceUpdate]= useState(0);

  subscribe(()=>{
    console.log('inside here', store.getState());
    setForceUpdate((prev)=>prev+1)  // here, this + sign or - sign makes no difference because both indicates some change in component 
  });

  const addHandle=()=>{
    dispatch({type:'ADD', payload:2})
  };

  const reduceHandle=()=>{
    dispatch({type:'REDUCE', payload:1})
  }
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={addHandle}>Add</button>
      <button onClick={reduceHandle}>Reduce</button>
    </div>
  );
}

export default App;
