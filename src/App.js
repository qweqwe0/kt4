import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
import NotFoundPage from './Pages/NotFoundPage';
import ProductPage from './Pages/ProductPage';
import './App.css'
import ProductAbout from './Pages/ProductAbout';



function App() {
  
  const location = useLocation()
  console.log(location)

    return (
          <Routes>
              <Route path="/products" element={<ProductPage />} />
              <Route path="/product/:id" element={<ProductAbout/>} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
    );
}

export default App;
