import React, { useState } from 'react';

const Grid = ({ row, col }) => {
  const [list, setList] = useState([]);
  const [selectionStarted, setSelectionStarted] = useState(false);

  const handleMouseDown = (id) => {
    setSelectionStarted(true);
    setList([id]);
  };

  const handleMouseEnter = (id) => {
    if (selectionStarted) {
      const startRow = Math.floor((list[0] - 1) / col);
      const endRow = Math.floor((id - 1) / col);

      const startCol = (list[0] - 1) % col;
      const endCol = (id - 1) % col;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);

      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);

      const newList = [list[0]];
      for (let i = minRow; i <= maxRow; i++) {
        for (let j = minCol; j <= maxCol; j++) {
          if (list[0] !== i * col + j + 1) newList.push(i * col + j + 1);
        }
      }

      setList(newList);
    }
  };

  return (
    <div
      className='grid'
      style={{ display: 'grid', gridTemplateColumns: `repeat(${col}, 1fr)` }}
      onMouseUp={() => setSelectionStarted(false)}
    >
      {[...Array(col * row)].map((_, i) => (
        <div
          key={i}
          className={`${list.includes(i + 1) ? 'selected' : ''} box`}
          onMouseDown={() => handleMouseDown(i + 1)}
          onMouseEnter={() => handleMouseEnter(i + 1)}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Grid;
