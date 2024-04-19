import React, { useState } from 'react';
import ModalContext from './ModalContext';

const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
