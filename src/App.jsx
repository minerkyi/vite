import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Products from './pages/products/Products';

function App() {
  return (
    <BrowserRouter basename='/vite'>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="*" element={<Products />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
