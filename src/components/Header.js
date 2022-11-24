import React from 'react';
import '../styles/Header.css';


function Header() {
  const message = 'Hello world! I am header';
  return (
    <div className="container">
      <h2>{message}</h2>
    </div>
  );
}

export default Header;
