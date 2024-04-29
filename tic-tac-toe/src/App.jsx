import { useEffect, useState } from 'react';
import './App.css';

function App({ size = 3 }) {
  const [values, setValues] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [last, setLast] = useState('O');
  const [lastIndex, setLastIndex] = useState();
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    let f = 0;
    for (let index = 1; index < size; index++) {
      if (
        values[Math.floor(lastIndex / size)][index] !==
        values[Math.floor(lastIndex / size)][0]
      ) {
        f = 1;
        break;
      }
    }
    if (f === 0) return true;
    f = 0;
    for (let index = 1; index < size; index++) {
      if (values[index][lastIndex % size] !== values[0][lastIndex % size]) {
        f = 1;
        break;
      }
    }
    if (f === 0) return true;

    let row = Math.floor(lastIndex / size);
    let col = lastIndex % size;
    if (row === col) {
      f = 0;
      for (let index = 1; index < size; index++) {
        if (values[index][index] !== values[0][0]) {
          f = 1;
          break;
        }
      }
      if (f === 0) return true;
    } else if (row + col + 2 === size + 1) {
      f = 0;
      col = size - 1;
      for (let row = 0; row < size; row++) {
        if (values[row][col] !== values[0][size - 1]) {
          f = 1;
          break;
        }
        col--;
      }
      if (f === 0) return true;
    }
    return false;
  };

  const handleSetInput = (i) => {
    if (!winner) {
      if (last === 'O') setLast('X');
      else setLast('O');
      let row = Math.floor(i / size);
      let col = i % size;
      let tempValues = [...values];
      if (last === 'O') tempValues[row][col] = 'X';
      else tempValues[row][col] = 'O';
      setValues(tempValues);
      setLastIndex(i);
    }
  };

  useEffect(() => {
    if (lastIndex !== undefined && checkWinner()) {
      setWinner(last);
    }
  }, [values, lastIndex]);

  return (
    <div className='tic-tac-toe-container'>
      {[...Array(size * size)].map((_, i) => (
        <div className='box' key={i} onClick={() => handleSetInput(i)}>
          <div className='content'>
            {values[Math.floor(i / size)][i % size]}
          </div>
        </div>
      ))}
      {winner && <div>Winner is {winner}</div>}
    </div>
  );
}

export default App;
