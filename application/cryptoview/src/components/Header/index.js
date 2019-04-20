import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-container">
          <img src={logo} className="Header-logo" alt="logo" />
          <p>
            Cryptoview
          </p>
        </header>
      </div>
    );
  }
}

export default Header;
