import React, { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import Images from '../../public/images';

const WeatherCard = () => {
  const [city, setCity] = useState('');
  const [cityname, setCityname] = useState('Kolkata');
  const [data, setData] = useState({});

  const submitCityName = () => {
    if (city.length === 0) alert('Please enter a valid city name');
    else setCityname(city);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(
      `
      https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${
        import.meta.env.VITE_API_KEY
      }`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, [cityname]);

  return (
    data?.name && (
      <div className='weather-card'>
        <div className='search-section'>
          <input
            type='text'
            placeholder='Search any location...'
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={submitCityName}>
            <ImSearch />
          </button>
        </div>
        <div className='data-section'>
          <div className='image-section'>
            <img src={Images.Cloudy} alt='logo' width={100} />
          </div>
          <div className='temp-section'>
            <h1 className='temp'>
              {Math.round(data.main.temp - 273.15)}&deg;C
            </h1>
          </div>
          <div className='details-section'>
            <div className='location'>{data.name}</div>
            <div className='more-details'>
              <div className='detail'>
                <div style={{ display: 'flex', gap: '0.7rem' }}>
                  <div>
                    <img src={Images.Humidity} alt='logo' width={20} />
                  </div>
                  <div>{data.main.humidity}%</div>
                </div>
                <div>Humidity</div>
              </div>
              <div className='detail'>
                <div style={{ display: 'flex', gap: '0.7rem' }}>
                  <div>
                    <img src={Images.Wind} alt='logo' width={20} />
                  </div>
                  <div>{data.wind.speed} km/hr</div>
                </div>
                <div>Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default WeatherCard;
