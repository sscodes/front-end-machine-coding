import { useEffect, useRef, useState } from 'react';
import './App.css';
import { useQuery } from '@tanstack/react-query';

function App() {
  const [limit, setLimit] = useState(10);

  const { data: restuarants } = useQuery({
    queryKey: ['restuarants', limit],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/restuarants?_limit=${limit}`
      );
      return await res.json();
    },
  });

  console.log(restuarants)

  const handleScrolledToBottom = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight
    )
      setLimit((e) => e + 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolledToBottom);

    return () => window.removeEventListener('scroll', handleScrolledToBottom);
  }, []);

  return (
    <div className='list'>
      {restuarants?.map((restuarant) => (
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
