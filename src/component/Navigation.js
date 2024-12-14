import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main_contener">
      <img className="shipingIcon" src="./asset/shoping.png" alt="" />
      <div className="fashin">
        <font color="red">
          <b>Fashin </b>
        </font>
        <font color="yellow">
          <b>Shope </b>
        </font>
      </div>

      <button
        className="menuToggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <nav className={isMenuOpen ? 'navOpen' : ''}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Women">Women</Link>
          </li>
          <li>
            <Link to="/Mans">Men</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
