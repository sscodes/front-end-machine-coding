import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [startDeselect, setStartDeselect] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (startDeselect)
        setList((orderlist) => {
          let tempList = [...orderlist];
          tempList.pop();
          return tempList;
        });
      else clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [startDeselect]);

  useEffect(() => {
    if (list.length === 9) setStartDeselect(true);
    else if (list.length === 0) setStartDeselect(false);
  }, [list]);

  const handleClick = (i) => {
    if (list.includes(i)) {
      let index = list.indexOf(i);
      let tempList = [...list];
      tempList.splice(index, 1);
      setList([...tempList]);
    } else setList([...list, i]);
  };

  return (
    <div className='container'>
      <div className='grid'>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`${list.includes(i) ? 'selected' : ''} box`}
            onClick={() => handleClick(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
