import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ProductProvider } from './context/productContext';
import AddProduct from './pages/AddProduct';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path='/add-product' element={<AddProduct/>} />

          </Routes>
        </div>
      </Router>
      
    </ProductProvider>
  );
};

export default App;
