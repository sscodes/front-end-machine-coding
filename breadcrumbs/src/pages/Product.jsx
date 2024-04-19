import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const [data, setData] = useState();
  const params = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://dummyjson.com/products/${params.id}`, { signal })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));

    return () => controller.abort();
  }, []);

  return (
    <>
      <div className='product-page-container'>
        <img src={data?.thumbnail} width={'50%'} alt={data?.title} />
        <h2>
          {data?.brand} {data?.title}
        </h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <b>Price: ${data?.price}</b>
          <b>Rating: {data?.rating}</b>
        </div>
        <p>{data?.description}</p>
      </div>
    </>
  );
};

export default Product;
