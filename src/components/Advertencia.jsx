import React from "react"

function Advertencia(props) {
    if (!props.warn){
        return null;
    }

    return (
        <div className="warning">
            <h2>⚠️</h2>
            <p>
             Advertencia!
            </p>
        </div>
    )
}

export default Advertencia;