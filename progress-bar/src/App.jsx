import { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const [state, setState] = useState('Loading...');
  return (
    <div className='container'>
      <h2>Progress Bar</h2>
      <ProgressBar onComplete={() => setState('Completed Successfully')} />
      <h4>{state}</h4>
    </div>
  );
}

export default App;
