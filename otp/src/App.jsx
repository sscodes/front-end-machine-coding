import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondVal] = useState('');
  const [thirdVal, setThirdVal] = useState('');
  const [fouthVal, setFouthVal] = useState('');

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fouthRef = useRef(null);

  //Handling focus on first input on page load
  useEffect(() => {
    firstRef.current.focus();
  }, []);

  /* Handling move to next input on entering value 
  and making sure that each input has only ne digit value. */
  useEffect(() => {
    // Handling move to next input on entering value
    if (firstVal !== null && firstVal > 0) {
      //Making sure that each input has only ne digit value
      if (firstVal > 9) setFirstVal(firstVal.substring(firstVal.length - 1));
      secondRef.current.focus();
    }
    if (secondVal !== null && secondVal > 0) {
      if (secondVal > 9)
        setSecondVal(secondVal.substring(secondVal.length - 1));
      thirdRef.current.focus();
    }
    if (thirdVal !== null && thirdVal > 0) {
      if (thirdVal > 9) setThirdVal(thirdVal.substring(thirdVal.length - 1));
      fouthRef.current.focus();
    }
    if (fouthVal !== null && fouthVal > 0) {
      if (fouthVal > 9) setFouthVal(fouthVal.substring(fouthVal.length - 1));
      window.location.reload();
    }
  }, [firstVal, secondVal, thirdVal, fouthVal]);

  //Handling move to previous empty input on backspace
  useEffect(() => {
    if (fouthVal.length === 0) {
      if (thirdVal.length === 0) {
        thirdRef.current.focus();
      } else if (secondVal.length === 0) {
        secondRef.current.focus();
      } else if (firstVal.length === 0) {
        firstRef.current.focus();
      }
    }
  }, [fouthVal]);
  useEffect(() => {
    if (thirdVal.length === 0) {
      if (secondVal.length === 0) {
        secondRef.current.focus();
      } else if (firstVal.length === 0) {
        firstRef.current.focus();
      }
    }
  }, [thirdVal]);
  useEffect(() => {
    if (firstVal.length === 0) {
      firstRef.current.focus();
    }
  }, [secondVal]);

  return (
    <div className='otp-container'>
      <div className='otp-section'>
        <input
          type='text'
          value={firstVal}
          onChange={(e) => setFirstVal(e.target.value)}
          ref={firstRef}
          onClick={(e) => firstRef.current.setSelectionRange(1, 1)}
        />
        <input
          type='text'
          value={secondVal}
          onChange={(e) => setSecondVal(e.target.value)}
          ref={secondRef}
          onClick={(e) => secondRef.current.setSelectionRange(1, 1)}
        />
        <input
          type='text'
          value={thirdVal}
          onChange={(e) => setThirdVal(e.target.value)}
          ref={thirdRef}
          onClick={(e) => thirdRef.current.setSelectionRange(1, 1)}
        />
        <input
          type='text'
          value={fouthVal}
          onChange={(e) => setFouthVal(e.target.value)}
          ref={fouthRef}
          onClick={(e) => fouthRef.current.setSelectionRange(1, 1)}
        />
      </div>
    </div>
  );
}

export default App;
