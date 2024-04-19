import React, { useContext } from 'react';
import '../App.css';
import ModalContext from '../context/ModalContext';

const Modal = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  return (
    <div className={`modal ${!showModal ? 'hide' : ''}`}>
      <div className='modal__content'>
        <h1>This is a modal</h1>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
