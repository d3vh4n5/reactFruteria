import React from "react";
import luna from "../img/luna.png"

const Header = ()=>{
    return (
        <header className="App-header">
            <h1>Verdulería Lunaranja</h1>
            <img src={luna} className="logo" alt="logo" />
        </header>
    )
}

export default Header;