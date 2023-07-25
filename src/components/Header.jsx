import React from "react";
import luna from "../img/luna.png";
import { NavLink } from 'react-router-dom';
import BotonSesion from "./BotonSesion";

const Header = ()=>{
    return (
        <header className="App-header">
            <h1>Frutería Lunaranja</h1>
            <img src={luna} className="logo" alt="logo" />
            <nav>
            <ul>
                <li>
                <NavLink to='/' >Inicio</NavLink>
                </li>
                <li>
                <NavLink to='/about' >About</NavLink>
                </li>
            </ul>
            <BotonSesion estaLogueado = {true}></BotonSesion>
            </nav>
        </header>
    )
}

export default Header;