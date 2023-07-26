import React from 'react'

const TableRow = (props) => {
    const {imagen, nombre, precio, id} = props.producto

  return (
        <tr>
            <td className='centrar'>{imagen}</td>
            <td className='centrar'>{nombre}</td>
            <td className='centrar'>{precio}</td>
            <td className='centrar'><button className='btn-eliminar' id={id}>❌</button></td>
        </tr>
  )
}

export default TableRow