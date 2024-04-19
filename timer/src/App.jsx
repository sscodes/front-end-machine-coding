import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState(false);
  const [hourValue, setHourValue] = useState(0);
  const [minuteValue, setMinuteValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [running, setRunning] = useState(false);
  const [buttonName, setButtonName] = useState('Start');
  const [buttonType, setButtonType] = useState(0);

  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const startBtnRef = useRef(null);

  const startCountDown = () => {
    if (hourValue !== 0 || minuteValue !== 0 || secondValue !== 0) {
      setButtonName('Pause');
      setButtonType(1);
      setRunning(true);
      setForm(false);
    }
  };

  const pauseCountDown = () => {
    setRunning(false);
    setButtonName('Continue');
    setButtonType(2);
  };

  const continueCountDown = () => {
    setRunning(true);
    setButtonName('Pause');
    setButtonType(1);
  };

  const resetCountDown = () => {
    setRunning(false);
    setButtonName('Start');
    setButtonType(0);
    setMinuteValue(0);
    setSecondValue(0);
    setHourValue(0);
  };

  useEffect(() => {
    let h = hourValue;
    let m = minuteValue;
    let s = secondValue;
    if (h === 0 && m === 0 && s === 0) {
      setRunning(false);
      return;
    }
    let time = h * 60 * 60 + m * 60 + s;
    const interval = setInterval(() => {
      time -= 1;
      s -= 1;
      setSecondValue(s);
      if (s === -1) {
        m -= 1;
        s = 59;
        setMinuteValue(m);
        setSecondValue(s);
      }
      if (m === -1) {
        h -= 1;
        m = 59;
        setMinuteValue(m);
        setSecondValue(s);
        setHourValue(h);
      }
      if (time == 0) {
        setButtonName('Start');
        setButtonType(0);
        setRunning(false);
        clearInterval(interval);
      }
    }, 1000);

    if (!running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (form) {
      if (hourValue.length > 1) {
        minuteRef.current.focus();
      }
      if (minuteValue.length > 1) {
        secondRef.current.focus();
      }
      if (secondValue.length > 1) {
        startBtnRef.current.focus();
      }
    }
  }, [hourValue, minuteValue, secondValue]);

  useEffect(() => {
    if (form) {
      setMinuteValue(0);
      setSecondValue(0);
      setHourValue(0);
    }
  }, [form]);

  const outerFunc = (ev) => {
    console.log(ev);
    if (ev.target.id === 'outside-div') setForm(false);
  };

  return (
    <div id='outside-div' onClick={outerFunc}>
      <h2>CountDown Timer</h2>
      <form className='container'>
        <div className='div'>
          <h4 className={`${!form ? 'label' : ''}`}>Hours</h4>
          <div>
            {form ? (
              <input
                className='input-section'
                type='text'
                onChange={(e) => setHourValue(e.target.value)}
              />
            ) : (
              <div
                className='value'
                onClick={() => {
                  if (!running) setForm((e) => !e);
                }}
              >
                {hourValue.toString().length === 1
                  ? '0' + hourValue
                  : hourValue.toString()}
              </div>
            )}
          </div>
        </div>
        <div className='div differentiator'>:</div>
        <div className='div'>
          <h4 className={`${!form ? 'label' : ''}`}>Minutes</h4>
          <div>
            {form ? (
              <input
                className='input-section'
                type='text'
                onChange={(e) => setMinuteValue(e.target.value)}
                ref={minuteRef}
              />
            ) : (
              <div
                className='value'
                onClick={() => {
                  if (!running) setForm((e) => !e);
                }}
              >
                {minuteValue.toString().length === 1
                  ? '0' + minuteValue
                  : minuteValue.toString()}
              </div>
            )}
          </div>
        </div>
        <div className='div differentiator'>:</div>
        <div className='div'>
          <h4 className={`${!form ? 'label' : ''}`}>Seconds</h4>
          <div>
            {form ? (
              <input
                className='input-section'
                type='text'
                onChange={(e) => setSecondValue(e.target.value)}
                ref={secondRef}
              />
            ) : (
              <div
                className='value'
                onClick={() => {
                  if (!running) setForm((e) => !e);
                }}
              >
                {secondValue.toString().length === 1
                  ? '0' + secondValue
                  : secondValue.toString()}
              </div>
            )}
          </div>
        </div>
      </form>
      <div className='button-section'>
        <button
          className={`${buttonType === 1 ? 'button-pause' : 'button-start'}`}
          ref={startBtnRef}
          onClick={
            buttonType === 0
              ? startCountDown
              : buttonType === 1
              ? pauseCountDown
              : continueCountDown
          }
        >
          {buttonName}
        </button>
        <button className='button-stop' onClick={resetCountDown}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
