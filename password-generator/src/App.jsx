import { useEffect, useRef, useState } from 'react';
import './App.css';
import {
  LOWERCASE_CHARACTERS,
  NUMBER_CHARACTERS,
  SYMBOL_CHARACTERS,
  UPPERCASE_CHARACTERS,
} from './constants';

function App() {
  const [range, setRange] = useState(0);
  const [length, setLength] = useState(0);
  const [strength, setStrength] = useState('weak');
  const [password, setPassword] = useState();
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [generatePasswordButton, setGeneratePasswordButton] = useState(false);

  const pwdRef = useRef();

  useEffect(() => {
    if (length >= 4) setGeneratePasswordButton(true);
    else if (length < 4) setGeneratePasswordButton(false);

    if (length >= 7 && upperCase && lowerCase && number && symbol) {
      setStrength('very strong');
    } else if (length >= 7 && upperCase && lowerCase && number) {
      setStrength('strong');
    } else if (length >= 7 && upperCase && lowerCase) {
      setStrength('medium');
    } else {
      setStrength('weak');
    }
  }, [length, upperCase, lowerCase, number, symbol]);

  useEffect(() => {
    setLength(Math.round(range / 10));
  }, [range]);

  const generatePassword = () => {
    let pwd = '';
    let i = 0;
    while (i < length) {
      if (upperCase) {
        pwd += UPPERCASE_CHARACTERS[Math.floor(Math.random() * 25)];
        i++;
      }
      if (number) {
        pwd += NUMBER_CHARACTERS[Math.floor(Math.random() * 9)];
        i++;
      }
      if (symbol) {
        pwd +=
          SYMBOL_CHARACTERS[
            Math.floor(Math.random() * SYMBOL_CHARACTERS.length - 1)
          ];
        i++;
      }
      pwd += LOWERCASE_CHARACTERS[Math.floor(Math.random() * 25)];
      i++;
    }
    setPassword(pwd);
  };

  const copyToClipboard = () => {
    console.log(pwdRef.current.text)
  }

  return (
    <div className='password-generator-card'>
      <div className='password-section'>
        <div className='password' ref={pwdRef}>{password}</div>
        <button className='copy-btn' onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div className='length-header'>
        <div>Character Length</div>
        <div>{length}</div>
      </div>
      <input
        type='range'
        min='1'
        max='100'
        value={range}
        onChange={(e) => setRange(e.target.value)}
        className='range'
      />
      <div className='options-section'>
        <div className='checkbox'>
          <input
            type='checkbox'
            id='checkbox1'
            onChange={() => setUpperCase((e) => !e)}
          />
          <label htmlFor='checkbox1'>Include Uppercase Letters</label>
        </div>
        <div className='checkbox'>
          <input
            type='checkbox'
            id='checkbox2'
            onChange={() => setLowerCase((e) => !e)}
          />
          <label htmlFor='checkbox2'>Include Lowercase Letters</label>
        </div>
        <div className='checkbox'>
          <input
            type='checkbox'
            id='checkbox3'
            onChange={() => setNumber((e) => !e)}
          />
          <label htmlFor='checkbox3'>Include Numbers</label>
        </div>
        <div className='checkbox'>
          <input
            type='checkbox'
            id='checkbox4'
            onChange={() => setSymbol((e) => !e)}
          />
          <label htmlFor='checkbox4'>Include Symbols</label>
        </div>
      </div>
      <div className='stength-section'>
        <div>Strength:</div>
        <div>{strength}</div>
      </div>
      <button
        disabled={!generatePasswordButton}
        className='pwd-btn'
        onClick={generatePassword}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
