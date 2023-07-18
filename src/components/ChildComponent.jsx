import React from "react";

function ChildComponent(props){
    return (
        <button onClick={props.onClick}>Click en el hijo</button>
    )
}

export default ChildComponent;