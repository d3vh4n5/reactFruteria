import React from 'react'

const Card = (props) => {

  return (
        <div className="card">
            <div className="card-image">{props.imagen}</div>
            <div className="card-name">{props.nombre}</div>
            <div className="card-price">$ {props.precio}</div>
            <div className="card-button">
                <button className="button button-outline button-add" id={props.id} title="Clic para agregar al carrito">+</button>
            </div>
        </div>
  )
}

export default Card