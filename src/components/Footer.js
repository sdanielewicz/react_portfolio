import React from 'react';
import '../styles/Header.css';


function Footer() {
  const message = 'Hello world! I am footer';
  return (
    <div className="footer">
      <h2>{message}</h2>
    </div>
  );
}

export default Footer;