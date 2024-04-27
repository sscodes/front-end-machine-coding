import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [restuarants, setRestuarants] = useState();
  let limit = useRef(10);

  const fetchData = () => {
    console.log('here');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      limit.current += 10;
      console.log(limit.current);
      fetch(`http://localhost:3000/restuarants?_limit=${limit.current}`)
        .then((res) => res.json())
        .then((data) => setRestuarants(data))
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/restuarants?_limit=${limit.current}`)
      .then((res) => res.json())
      .then((data) => setRestuarants(data))
      .catch((err) => console.error(err));
      
    window.addEventListener('scroll', fetchData);

    return () => {
      window.removeEventListener('scroll', fetchData);
    };
  }, []);

  return (
    <div className='list'>
      {restuarants?.slice(0, 10).map((restuarant) => (
        <div key={restuarant.name} className='list-element'>
          <h4>{restuarant.name}</h4>
          <div>{restuarant.rating}</div>
          <div>{restuarant.pure_veg}</div>
          <div>{restuarant.address}</div>
          <div>{restuarant.type}</div>
          <div>{restuarant.offer}</div>
          <div>{restuarant.distance}</div>
          <div>{restuarant.time}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
