import React from 'react'
import logo from '../logo.svg';

export const Footer = () => {
  return (
    <footer>
        <p>
            App desarrollada en React por <a href="https://d3vh4n5.com.ar/" target='_blank'>Juan Basgall</a>.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
    </footer>
  )
}

export default Footer;
