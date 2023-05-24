import React, {useEffect} from 'react';

const Stopwatch = ({setTime, setIsRunning, isRunning}) => {

   useEffect(() => {
    let intervalId = null;
    if (isRunning) {
        intervalId = setInterval(() => {
            setTime((prevTime) => prevTime + 1)
        }, 1000)
    }


   },[isRunning])

//    event functions
const handleStart = () => {
   setIsRunning(true)
}
const handleStop = () => {
   setIsRunning(false)
}
const handleReset = () => {
setTime(0)
}
    return (
      <>
        <div>Stopwatch component</div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </>
    );
}

export default Stopwatch;
