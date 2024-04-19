import { useContext, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';
import ModalContext from './context/ModalContext';

function App() {
  const { showModal, setShowModal } = useContext(ModalContext);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-on');
      document.body.classList.remove('modal-off');
    } else {
      document.body.classList.remove('modal-on');
      document.body.classList.add('modal-off');
    }
  }, [showModal]);

  return (
    <>
      <Modal />
      <div className='modal-button-section'>
      <h1>Hello, this a demo modal component's website</h1>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
      </div>
    </>
  );
}

export default App;
