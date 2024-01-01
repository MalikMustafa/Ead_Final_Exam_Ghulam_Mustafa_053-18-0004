// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cartItemCount }) {
  return (
    <nav>
      <div className="logo">Grace</div>
      <div className="nav-buttons">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <div className="cart">
          <Link to="/cart">
            <span>Cart ({cartItemCount})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
