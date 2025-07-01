//4. Create a stopwatch with start pause and reset button

import React, { useState, useEffect } from "react";

export default function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  function handleStart() {
    setIsStarted(true);
    setIsPaused(false);
  }

  function handlePause() {
    setIsPaused(true);
  }

  function handleReset() {
    setCurrentValue(0);
    setIsStarted(false);
    setIsPaused(false);
  }

  useEffect(() => {
    let interval;
    if (isStarted && !isPaused) {
      interval = setInterval(() => {
        setCurrentValue((prev) => prev + 1);
      }, 500);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isStarted, isPaused]);

  return (
    <div>
      <div>
        Stop Watch: {currentValue}
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}


//2. Create three timer with sync and reset button


import React, { useState, useEffect } from 'react'

export default function App() {
    const [timers, setTimers] = useState({
        1: 0,
        2: 0,
        3: 0
    })
    const [isStarted, setIsStarted] = useState(false)

    function handleStart() {
        setIsStarted(true)
    }

    useEffect(() => {
        if (isStarted) {
            const interval = setInterval(() => {
                // Correctly increment each timer individually
                setTimers(prev => ({
                    1: prev[1] + 1,
                    2: prev[2] + 1,
                    3: prev[3] + 1
                }))
            }, 1000)
            
            // Proper cleanup for interval
            return () => clearInterval(interval)
        }
    }, [isStarted])

    function handleSync(timerId) {
        setTimers({
            1: timers[timerId],
            2: timers[timerId],
            3: timers[timerId]
        })
    }
    
    return (
        <div>
            <div>timer1: {timers[1]} 
                <span><button onClick={() => handleSync(1)}>Sync</button></span>
            </div>
            <div>timer2: {timers[2]} 
                <span><button onClick={() => handleSync(2)}>Sync</button></span>
            </div>
            <div>timer3: {timers[3]} 
                <span><button onClick={() => handleSync(3)}>Sync</button></span>
            </div>
            <div>
                <button onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

