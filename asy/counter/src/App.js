import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      <div data-testid="counter">
        {toggle && <Counter/>}
        <br/>
        <button style={toggle?{'backgroundColor':'red','color':'white'}:{'backgroundColor':'green','color':'white'}} 
        onClick={()=> setToggle(!toggle)}>{toggle? 'Hide':'Show'} Component</button>
      </div>
    </div>
  );
}

export default App;
