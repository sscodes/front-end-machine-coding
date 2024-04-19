import { useRef, useState } from 'react';
import { section } from '../Data';
import './App.css';

function App() {
  const [activeSection, setActiveSections] = useState(0);
  const [widthPercent, setWidthPercent] = useState(0);
  const [finish, setFinish] = useState(false);
  const intervalRef = useRef(null);
  const timerRef = useRef(null);

  const handleNext = () => {
    setWidthPercent(0);
    timerRef.current = 0;
    setActiveSections((e) => e + 1);
    intervalRef.current = setInterval(() => {
      if (timerRef.current < 100) {
        setWidthPercent((e) => e + 1);
        timerRef.current += 1;
      } else {
        setWidthPercent(100);
        clearInterval(intervalRef.current);
      }
    }, 4);
  };

  return (
    <div className='container'>
      <div className='stepper-container'>
        <div
          className={`round ${
            activeSection === 0
              ? 'active'
              : activeSection > 0
              ? 'past-active'
              : ''
          }`}
        >
          <div>{section[0].id}</div>
          <div className='round-label'>{section[0].title}</div>
        </div>
        <div className='pipe-section'>
          <div className='pipe'>
            <div
              className='inner-pipe'
              style={{
                width: `${
                  activeSection === 1
                    ? widthPercent
                    : activeSection > 1
                    ? 100
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
        <div
          className={`round ${
            activeSection === 1
              ? 'active'
              : activeSection > 1
              ? 'past-active'
              : ''
          }`}
        >
          <div>{section[1].id}</div>
          <div className='round-label'>{section[1].title}</div>
        </div>
        <div className='pipe-section'>
          <div className='pipe'>
            <div
              className='inner-pipe'
              style={{
                width: `${
                  activeSection === 2
                    ? widthPercent
                    : activeSection > 2
                    ? 100
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
        <div
          className={`round ${
            activeSection === 2
              ? 'active'
              : activeSection > 2
              ? 'past-active'
              : ''
          }`}
        >
          <div>{section[2].id}</div>
          <div className='round-label'>{section[2].title}</div>
        </div>
        <div className='pipe-section'>
          <div className='pipe'>
            <div
              className='inner-pipe'
              style={{
                width: `${
                  activeSection === 3
                    ? widthPercent
                    : activeSection > 3
                    ? 100
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
        <div
          className={`round ${
            activeSection === 3 && !finish
              ? 'active'
              : finish
              ? 'past-active'
              : ''
          }`}
        >
          <div>{section[3].id}</div>
          <div className='round-label'>{section[3].title}</div>
        </div>
      </div>
      <div className='content-section'>
        <div>{section[activeSection].content}</div>
      </div>
      <div className='button-section'>
        {activeSection === 3 ? (
          <button disabled={activeSection > 4} onClick={() => setFinish(true)}>
            Finish
          </button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
}

export default App;
