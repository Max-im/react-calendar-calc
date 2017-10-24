import React from 'react';
import { Link } from 'react-router';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <Link to="/">about</Link>
      <Link to="/calc">calc</Link>
      <Link to="/contacts">contacts</Link>
    </header>
  );
}


export default Header;


