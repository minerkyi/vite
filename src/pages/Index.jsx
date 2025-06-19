import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <p>인덱스</p>
      <Link to="/products">Product</Link>
    </div>
  )
}
