
import './App.css';
import {useEffect, useState} from 'react';
import useTimeout from './hooks/useTimeout';
import TimeoutComp from './Components/TimeoutComponent';

function App() {
  const showText = useTimeout(2000);
  return (
    <div className="App">
      {showText && <h1>App Component</h1>}
      <TimeoutComp/>
    </div>
  );
}

export default App;
