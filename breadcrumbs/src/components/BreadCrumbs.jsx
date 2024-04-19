import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BreadCrumbs = () => {
  const [path, setPath] = useState(['home']);
  const navigate = useNavigate();

  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName === '/') setPath(['home']);
    else setPath(['home', ...pathName.split('/').slice(1, pathName.length)]);
  }, [pathName]);

  const handleClick = (clickedPage) => {
    if (clickedPage === 'home') navigate('/');
    else if (clickedPage === 'products') navigate('/products');
    else navigate(`/products/${clickedPage}`);
  };

  return (
    <div>
      {path?.map((page, i) => (
        <span key={i}>
          <span onClick={() => handleClick(page)} className='breadcrumb-page'>
            {page}
          </span>
          {i !== path.length - 1 && <span>/</span>}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
