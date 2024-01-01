// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-list">
      <h2>Discover NEW Arrivals</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
            </Link>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
