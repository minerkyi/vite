import { useState } from 'react';
import Products from './pages/products/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  function Index() {
    return (
      <>
        <h1>Index</h1>
      </>
    );
  }

  return (
    <BrowserRouter basename='/vite'>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
