import React from 'react'
import frutas from "../img/icon-fruits-64.png";

const Carrito = () => {

  

  return (
    <div>
      <h1>Aca va la tabla del carrito</h1>
      <img src={frutas} className="logo" alt="logo" />
      <section>
            <table>
                <thead>
                    <tr>
                        <th id="tablehead">Producto</th>
                        <th id="tablehead">Descripción</th>
                        <th id="tablehead">Importe</th>
                        <th id="tablehead">Quitar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aquí</td>
                        <td>verás</td>
                        <td>productos</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </section>
        <div class="centrar-div">
            <button class="button" id="btnComprar">COMPRAR</button>
        </div>
    </div>
  )
}

export default Carrito