import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = ()=>{
    const handleClick = ()=>{
        console.log("Se hizo click en el botón");
    }
    return (
        <div>
            <button onClick={handleClick}>Click Aquí</button>
            <ChildComponent onClick={handleClick}></ChildComponent>
        </div>
    )
}

export default ParentComponent