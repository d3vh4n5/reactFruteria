import React, { useState } from 'react'

export const MyComponent = () => {
    const [isHighlighted, setIsHighlighted] = useState(false)

    const handleMouseOver = ()=>{
        setIsHighlighted(true);
    }

    const handleMouseOut = ()=>{
        setIsHighlighted(false);
    }

    const buttonStyles = {
        backgroundColor: isHighlighted ? 'blue' : 'gray',
        color: 'white',
        padding : '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    }

  return (
        <button
            style={buttonStyles}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            Botón con estilos en Línea
        </button>
  )
}

export default MyComponent