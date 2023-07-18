import React from "react"

function SaludoUsuario(props){
    const estaLogueado = props.estaLogueado
    if (estaLogueado){
        return <h1>Bienvenido de vuelta!</h1>
    }

    return <h1>Por favor, inicie sesión.</h1>
}

export default SaludoUsuario