import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <section>
      <h2>상품 등록</h2>
      <p>상품 화면</p>
      <Link to="/">Index</Link>
    </section>
  )
}
