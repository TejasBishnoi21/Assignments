import {useReducer} from 'react';
import './App.css';

function App() {
  const [count,dispatch] = useReducer((oldState,
    actionObj) => {
      switch(actionObj.type){
        case "ADD":
          let newAddCount = actionObj.payload || 1;
          return oldState + newAddCount;
        case "REDUCE":
          let newReduceCount = actionObj.payload || 1;
          return oldState - newReduceCount;
        default:
          return oldState;
      }
    }, 5);
    
  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={()=> dispatch({type:"ADD", payload:2})}
      >+</button>

      <button onClick={()=> dispatch({type:"REDUCE"})}
      >-</button>
    </div>
  );
}

export default App;
