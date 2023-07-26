import React from 'react'
import frutas from "../img/icon-fruits-64.png";
import TableRow from './TableRow';

const carritoFrutas = JSON.parse(localStorage.getItem('carritoFrutas')) || [] // Mayus change
console.log(carritoFrutas)
const Carrito = () => {

    const keyGenerator = ()=>{
        return parseInt(Math.random() * 10_000)
    }
  

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
                    {carritoFrutas.map(producto=>(
                        <TableRow producto={producto} key={keyGenerator()} />
                        // Condicional de que si producto esta vacio aparezca una
                        // fila con colspan=4 que diga que no hay productos
                    ))}
                </tbody>
                <tfoot className="centrar-div">
                    <td colspan="4">
                    <button className="button" id="btnComprar">COMPRAR</button>
                    </td>
                </tfoot>
            </table>
        </section>
    </div>
  )
}

export default Carrito