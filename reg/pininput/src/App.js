import './App.css';
import {useState} from 'react';
import Pin from './Components/Pin';

function App() {
  const [pininput, setInput] = useState('')
  return (
    <div className="App">
      <Pin length={5}/>
      <h4>OTP is {pininput}</h4>
    </div>
  );
}

export default App;
