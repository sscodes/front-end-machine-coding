import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import BreadCrumbs from './components/BreadCrumbs';

function App() {
  return (
    <>
      <BreadCrumbs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
