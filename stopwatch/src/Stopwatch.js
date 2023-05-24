import React, {useState, useEffect } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(()=> {
        let interval;
        if(running) {
            interval = setInterval(()=> setTime(time + 1), 10)
        }

    }, [running, time])

    const runStartStop = () => {
        setRunning(!running)
    }

    const reset = () => {
        setTime(0)
    }

    const Hours = Math.floor(time / 1000 * 60 * 60) % 24

    const Minutes = Math.floor(time / 1000 * 60 ) % 60

    return (
        <div>
            <h1>React Stopwatch</h1>
            <p>{Hours} : {Minutes}</p>
            <div className='s-buttons'>
                <button onClick={runStartStop}>{running ? "Stop" : "Start" }</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;
