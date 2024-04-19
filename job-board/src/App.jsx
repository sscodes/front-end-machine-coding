import { useEffect, useState } from 'react';
import './App.css';
import Job from './components/Job';

function App() {
  const [idList, setIdList] = useState([]);
  const [limit, setLimit] = useState(6);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json', {
      signal,
    })
      .then((res) => res.json())
      .then((data) => setIdList(data))
      .catch((err) => console.error(err));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (limit >= idList.length) setShowButton(false);
    else setShowButton(true);
  }, [limit, idList]);

  return (
    <div className='container'>
      <div className='header-section'>Hacker News Jobs Board</div>
      <div className='jobs-container'>
        {idList.slice(0, limit).map((id) => (
          <Job key={id} id={id} />
        ))}
      </div>
      {showButton && (
        <div className='button-section'>
          <button onClick={(e) => setLimit((e) => e + 6)}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default App;
