// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Learn more about our company and mission.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Reach out to our customer support team.</p>
        </div>
        <div className="footer-section">
          <h3>Privacy Policy</h3>
          <p>Review our privacy policy to understand how we handle your data.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
