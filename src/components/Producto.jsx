import React from "react"
import { useState } from "react";

const Producto = ()=>{
    
    const [mostrarDetalle, setMostrarDetalle] = useState(false);

    return (
        <div>
            <h3>Producto</h3>
            <p>Descripción brebe del producto</p>
                {mostrarDetalle && <p>Esta es una descripción más detallada del producto.</p>}
            <button onClick={()=> setMostrarDetalle(!mostrarDetalle)}>
                {mostrarDetalle ? 'Ocultar Detalles' : 'Mostrar Detalles'}
            </button>
        </div>
    )
}

export default Producto;