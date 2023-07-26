import React, { useEffect, useState } from 'react'
import Card from './Card';
import Advertencia from './Advertencia';

const carritoFrutas = JSON.parse(localStorage.getItem('carritoFtrutas')) || [] // Mayus change

const Fetching = () => {
    const [data, setData] = useState([]);
    const [warn, setWarn] = useState(true)

    useEffect(()=>{
        fetch('/fakebackend/productos.json')
        // fetch('https://miniapis.onrender.com/verduleria/api/verduras/')
            .then(response=>response.json())
            .then(data=> {
              setData(data)
              setWarn(false)
            })
            .catch(error=>{
              console.log(error)
              setWarn(true)
            })
    }, [])


  return (
    <div className="container">
      <Advertencia 
          warn={warn} 
          mensaje={'Hubo un error al cargar los productos.. 🛜 🌎🚫'}
      ></Advertencia>
        {data.map(producto=> (
            <Card 
              producto={producto} 
              carritoFrutas={carritoFrutas}
              key={producto.id} 
            ></Card>
        ))}
    </div>
  )
}

export default Fetching