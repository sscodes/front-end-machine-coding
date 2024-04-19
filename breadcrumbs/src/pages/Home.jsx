import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductComponent from '../components/ProductComponent';

const Home = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/products', { signal })
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((err) => console.error(err));

    return () => controller.abort();
  }, []);

  return (
    <>
      <div className='home-container'>
        <div className='header'>
          <h1>Home Page</h1>
        </div>
        <div className='products'>
          {data?.slice(0, 6).map((product) => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </div>
        <div className='button-section'>
          <button onClick={() => navigate(`/products`)}>
            Show All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
