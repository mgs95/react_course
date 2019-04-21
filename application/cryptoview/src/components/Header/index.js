import React, { Component } from 'react';
import logo from '../../logo.svg';
import IconButton from '../IconButton';
import { ICONS } from "../../constants/application";
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-container">
          <IconButton
            icon={ ICONS.options }
            color={ 'white' }
            onClickHandler={ this.props.onButtonClick }
          />
          <div className="Header-title">
            <img src={logo} className="Header-logo" alt="logo" />
            <p>
              Cryptoview
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
