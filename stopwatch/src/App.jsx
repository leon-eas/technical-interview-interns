import "./App.css";
import {useState} from 'react';
import Logo from './assets/logo.png'
import Stopwatch from './components/StopWatch.component.jsx'

function App() {
   const [time, setTime] = useState(0);
   const [isRunning, setIsRunning] = useState(false);
  return (
    <>
      <div className="logo">{Logo}</div>
      <h1>{time}</h1>
      <Stopwatch setTime={setTime} setIsRunning={setIsRunning} isRunning={isRunning} />
    </>
  );
}

export default App;
