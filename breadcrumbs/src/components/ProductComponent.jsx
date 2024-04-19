import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductComponent = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className='product-card'
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <h4>
          {product.brand} {product.title}
        </h4>
        <img src={product.thumbnail} height={100} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductComponent;
