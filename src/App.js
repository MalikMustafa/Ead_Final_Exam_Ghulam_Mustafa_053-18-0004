// src/components/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ServiceSection from './components/ServiceSection';
import TopSellersSection from './components/TopSellersSection';
import Footer from './components/Footer';
import './NavBar.css';
import './ProductList.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <div>
        <NavBar cartItemCount={cartItems.length} />
        <Switch>
          <Route path="/products" exact>
            <ProductList addToCart={addToCart} />
          </Route>
          <Route path="/products/:id">
            <ProductDetail addToCart={addToCart} />
          </Route>
          <Route path="/services">
            <ServiceSection />
          </Route>
          <Route path="/top-sellers">
            <TopSellersSection />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
