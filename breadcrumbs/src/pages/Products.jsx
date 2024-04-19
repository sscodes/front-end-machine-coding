import React, { useEffect, useState } from 'react';
import ProductComponent from '../components/ProductComponent';

const Products = () => {
  const [data, setData] = useState();

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
      <div className='products-page'>
        <div className='header'>
          <h1>Products Page</h1>
        </div>
        <div className='products'>
          {data?.map((product) => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
