import { useState } from 'react';
import './App.css';
import Grid from './components/Grid';

const App = () => {
  const [row, setRow] = useState();
  const [col, setCol] = useState();
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
  };
  return (
    <>
      {!submit &&<form onSubmit={handleSubmit} className='form-section'>
        <div>
          <label htmlFor='row'>Row</label>
          <input
            type='number'
            id='row'
            onChange={(e) => setRow(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='col'>Col</label>
          <input
            type='number'
            id='col'
            onChange={(e) => setCol(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>}
      {submit && <Grid row={row} col={col} />}
    </>
  );
};

export default App;
