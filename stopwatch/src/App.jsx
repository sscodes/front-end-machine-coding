import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTime(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (running) setTime((time) => time + 1000);
    }, 1000);

    if (!running) clearInterval(timer);
    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }, [time]);

  return (
    <div>
      <div className='container'>
        <div>{hours < 10 ? '0' + hours : hours.toString()}</div>
        <div className='diff'>:</div>
        <div>{minutes < 10 ? '0' + minutes : minutes.toString()}</div>
        <div className='diff'>:</div>
        <div>{seconds < 10 ? '0' + seconds : seconds.toString()}</div>
      </div>
      <div className='btn-section'>
        <button className='start-btn' onClick={startTimer}>
          Start
        </button>
        <button className='stop-btn' onClick={stopTimer}>
          Stop
        </button>
        <button className='reset-btn' onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
