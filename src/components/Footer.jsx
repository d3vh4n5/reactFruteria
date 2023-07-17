import React from 'react'
import logo from '../logo.svg';

export const Footer = () => {
  return (
    <footer>
        <p>
            App desarrollada en React por Juan Basgall.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
    </footer>
  )
}

export default Footer;
