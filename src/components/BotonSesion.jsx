import React from "react"

function BotonSesion(props){
    const estaLogueado = props.estaLogueado;
    return (
        <button onClick={props.clickHandler}>
            { estaLogueado ? 'Cerrar sesión' : 'Iniciar sesión'}
        </button>
    )
}

export default BotonSesion