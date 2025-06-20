import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <h1>인덱스</h1>
      <Link to="/products">Product</Link>
    </div>
  )
}
