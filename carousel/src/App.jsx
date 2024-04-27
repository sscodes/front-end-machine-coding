import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import './App.css';
import { Images } from './assets';

function App() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <div className='image-section'>
      {Images.map((image, i) => (
        <div key={image.colour}>
          <img
            src={image.link}
            className='image'
            alt=''
            style={{ translate: `${carouselIndex * -100}%` }}
          />
        </div>
      ))}
      <h1 className='title'>{Images[carouselIndex].colour}</h1>
      <div className='left-arrow'>
        <FaChevronLeft
          onClick={() =>
            setCarouselIndex((e) =>
              carouselIndex === 0 ? Images.length - 1 : e - 1
            )
          }
        />
      </div>
      <div className='right-arrow'>
        <FaChevronRight
          onClick={() => setCarouselIndex((e) => (e + 1) % Images.length)}
        />
      </div>
      <div className='navigator-section'>
        {Images.map((image, i) => (
          <div
            className={`navigator ${carouselIndex === i ? 'selected' : ''}`}
            key={i}
            onClick={() => setCarouselIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
