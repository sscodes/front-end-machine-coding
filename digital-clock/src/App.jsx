import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [hour, setHour] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [ampm, setampm] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
  }, []);

  useEffect(() => {
    if (hour < 12) {
      setHour(hour % 12);
      setampm('AM');
    } else setampm('PM');
  }, [hour]);

  return (
    <div className='container'>
      <div>{hour < 10 ? '0' + hour : hour.toString()}</div>
      <div className='differentiator'>:</div>
      <div>{minutes < 10 ? '0' + minutes : minutes.toString()}</div>
      <div className='differentiator'>:</div>
      <div>{seconds < 10 ? '0' + seconds : seconds.toString()}</div>
      <div>{' ' + ampm}</div>
    </div>
  );
}

export default App;
