import React from 'react'

const About = () => {

    // Estilos en línea:
    const estilos = {
        border: '3px solid yellow',
        borderRadius: '20px',
    }

  return (
    <div style={estilos}>
        <h1>Acerca de este proyecto:</h1>
        <p>
            Versión 2.0: Este proyecto es la versión en React del ejercicio 
            <a href="">Ventadefrutas.com</a> que hicimos con JavaScript Vanila 
            en la materia de "Interfaz de desarrollo" de mi carrera como Técnico 
            Superior en Programación en el instituto <a href="">Teclab</a>.
        </p>
        <p>Este proyecto contiene:</p>
        <ul>
            <li>React</li>
            <li>React-router-dom</li>
            <li>Styled Components</li>
            <li>Miligram (libraría front al estilo Bootstrap)</li>
        </ul>
    </div>
  )
}

export default About