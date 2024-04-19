import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div className='parent'>
        <div className='parent__box'></div>
        <div className='parent__box'></div>
        <div className='parent__box'></div>
        <div className='parent__box'></div>
        <div className='parent__box'></div>
      </div>
      <div className='parent__2'>
        <div className='box box1'></div>
        <div className='box box2'></div>
        <div className='box box3'></div>
      </div>
      {/* <div className='parent__3'>
        <div className='section__1'>
          <div className='parent__box__2'></div>
        </div>
        <div className='section__2'>
          <div className='parent__box__2'></div>
        </div>
        <div className='section__3'>
          <div className='parent__box__2'></div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
