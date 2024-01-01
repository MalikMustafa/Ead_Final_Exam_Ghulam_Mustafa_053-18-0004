// src/components/ServiceSection.js
import React from 'react';

function ServiceSection() {
  return (
    <div className="service-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Free Shipping</h3>
          <p>Enjoy free shipping on all orders!</p>
        </div>
        <div className="service-card">
          <h3>Discounts</h3>
          <p>Get exclusive discounts on selected items.</p>
        </div>
        <div className="service-card">
          <h3>24/7 Customer Support</h3>
          <p>Our customer support team is available around the clock to assist you.</p>
        </div>
        <div className="service-card">
          <h3>Easy Returns</h3>
          <p>Return items hassle-free within 30 days.</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
