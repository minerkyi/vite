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
    <BrowserRouter>
      <Routes>
        <Route path="/vite/aa" element={<Index />}/>
        <Route path="/vite/products" element={<Products />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
