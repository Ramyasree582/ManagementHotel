import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-title">Inti Ruchulu</div>
        
        <div className="footer-info">
          <div className="footer-contact">
            <strong>Address:</strong><br />
            Kalajyothi, Dharmavaram<br />
            Andhra Pradesh 515671
          </div>
          
          <div className="footer-contact">
            <strong>Contact:</strong><br />
            Phone: +91 7989630780<br />
            Email: info@intiruchulu.com
          </div>
          
          <div className="footer-contact">
            <strong>Hours:</strong><br />
            Mon - Sun: 8:00 AM - 10:00 PM<br />
            We deliver fresh meals daily!
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Inti Ruchulu. All rights reserved. | Authentic South Indian Cuisine</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;