import React from 'react';
import '../styles/Header.css';


function Header() {
  const message = 'Hello world!';
  return (
    <div className="header">
      <h2>{message}</h2>
      <p> Steven Danielewicz:
      IT Professional & Full Stack Developer</p>
    </div>
  );
}

export default Header;
