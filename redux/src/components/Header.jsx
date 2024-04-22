import React from 'react';

const Header = ({ setModal }) => {
  return (
    <div className='header'>
      <div className='header-title'>Employee Database Management</div>
      <button onClick={() => setModal((e) => !e)}>Add Employee</button>
    </div>
  );
};

export default Header;
