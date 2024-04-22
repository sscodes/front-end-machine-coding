import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEmployees } from './actions/employeeActions';
import Detail from './components/Detail';
import Header from './components/Header';
import List from './components/List';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.classList.add('modal-on');
    } else {
      document.body.classList.remove('modal-on');
    }
  }, [modal]);

  return (
    <div className='container'>
      <Header setModal={setModal} />
      <div className='hero-section'>
        <List />
        <Detail />
      </div>
      <Modal display={modal} setDisplay={setModal} />
    </div>
  );
}

export default App;
