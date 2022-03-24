import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        <h3>products</h3>

        {products.map((product) => (
          <Product></Product>
        ))}
      </div>
      <div className="order-container">
        <h3>Order Summary</h3>
      </div>
    </div>
  );
};

export default Shop;
