import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch('https://dummyjson.com/products?limit=100', { signal })
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((err) => console.error(err));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <div className='container'>
        {data.slice(page * 10, (page + 1) * 10).map((data) => (
          <div className='card' key={data.id}>
            <div className='image-section'>
              <img src={data.thumbnail} alt={data.title} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <h4 style={{ display: 'flex', justifyContent: 'center' }}>
                <b>Rs. {data.price}</b>
              </h4>
              <h4 style={{ display: 'flex', justifyContent: 'center' }}>
                <b>Rating: {data.rating}</b>
              </h4>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <h3>{data.brand + ' ' + data.title}</h3>
            </div>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
      {data.length > 0 && (
        <div className='pagination-container'>
          <div
            className='pagination'
            onClick={() =>
              setPage((i) => {
                console.log(i);
                if (i === 0) return (data.length / 10)-1;
                return i - 1;
              })
            }
          >
            Previous
          </div>
          {[...Array(data.length / 10)].map((_, i) => (
            <div className='pagination' onClick={() => setPage(i)} key={i}>
              {i + 1}
            </div>
          ))}
          <div
            className='pagination'
            onClick={() => setPage((i) => (i + 1) % (data.length / 10))}
          >
            Next
          </div>
        </div>
      )}
    </>
  );
}

export default App;
