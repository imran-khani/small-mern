import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ProductProvider } from './context/productContext';
import AddProduct from './pages/AddProduct';
import ProductPage from './components/ProductDetails';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path='/add-product' element={<AddProduct/>} />
            <Route path="/product/:id" element={<ProductPage />} /> {/* Dynamic route */}
          </Routes>
        </div>
      </Router>
      
    </ProductProvider>
  );
};

export default App;
