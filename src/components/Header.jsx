import React from "react";
import luna from "../img/luna.png";
import { NavLink } from 'react-router-dom';
import BotonSesion from "./BotonSesion";
// import styled from 'styled-components';


const Header = ()=>{
    return (
        <header className="App-header">
            <div>
                <h1>Frutería Lunaranja</h1>
                <img src={luna} className="logo" alt="logo" />
            </div>
            <input type="checkbox" name="" id="check"  />
            <label htmlFor="check" className="mostrar-menu">&#9776;</label>
            <nav>
                <ul>
                    <li>
                    <NavLink to='/' className={'btnMenu'}>Inicio</NavLink>
                    </li>
                    <li>
                    <NavLink to='/about' className={'btnMenu'}>About</NavLink>
                    </li>
                </ul>
                <BotonSesion estaLogueado = {true}></BotonSesion>
                <label htmlFor="check"  className="esconder-menu">
                    X
                </label>
            </nav>
        </header>
    )
}

export default Header;