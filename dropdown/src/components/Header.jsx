import React, { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className='header'>
      <div style={{ marginLeft: '1rem' }}>Header</div>
      <div className='dropdown-section'>
        <div
          className='dropdown-button'
          onClick={() => setShowDropDown((e) => !e)}
        >
          <div>
            <IoIosArrowDropdown />
          </div>
          <div>Dropdown</div>
        </div>
        {showDropDown && (
          <div className='list-section'>
            <div
              className='list-item'
              onClick={() => setShowDropDown((e) => !e)}
            >
              Option 1
            </div>
            <div
              className='list-item'
              onClick={() => setShowDropDown((e) => !e)}
            >
              Option 2
            </div>
            <div
              className='list-item'
              onClick={() => setShowDropDown((e) => !e)}
            >
              Option 3
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
