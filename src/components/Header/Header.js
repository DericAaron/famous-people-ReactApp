import React, { Component } from 'react';
//import logo from '../../logo.svg';
import logo from '../../derPhoto.jpg';

class Header extends Component {
  render() {
    return (

        <header className="App-header">
          <span>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          </span>
          <h1 className="App-title">Famous People</h1>
        </header>
    );
  }
}

export default Header;