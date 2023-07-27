import React from 'react'

const About = () => {

    // Estilos en línea:
    const estilos = {
        margin: '50px auto',
        padding: '1.2rem',
        borderRadius: '10px',
        background: 'rgba(220, 220, 220, .7)',
        maxWidth: '1200px'
    }

  return (
    <div style={estilos}>
        <h1>Acerca de este proyecto:</h1>
        <hr />
        <p>
            <b>Versión 2.0</b>: Este proyecto es la versión en React del ejercicio:  
            <i><a href="https://d3vh4n5.com.ar/views/ventadefrutas/" target='_blank'>Ventadefrutas.com</a></i> 
            que hicimos con JavaScript Vanila 
            en la materia de "Interfaz de desarrollo" de mi carrera como Técnico 
            Superior en Programación en el instituto <a href="">Teclab</a>.
        </p>
        <p>
            <i><a href="https://d3vh4n5.com.ar/views/ventadefrutas/" target='_blank'>Ventadefrutas.com</a></i>
             fue un ejercicio que consistía en presentarnos una 
            base de un proyecto, archivos html y css, y a los cuales fuimos agregando 
            lógica de front-end a travéz de JavaScript. Con este lenguaje empezamos 
            generando de formá dinámica las tarjetas, a las cuales a travéz de un buckle 
            y un archivo .json que simulaba una consulta a una API, servimos de contenido.
        </p>
        <p>
            Posteriormente, agregamos "eventListeners" para aplicar funcionalidades a los 
            botones. Inicialmente en esta etapa, las funcionalidades tenían efecto solo en 
            la consola, y podíamos apreciarlas a travéz del uso de <code>console.log()</code> 
            y <code>console.table()</code>, para luego implementar el uso del <b>localStorage</b>.
        </p>
        <p>
            Finalmente, se implementaron módulos para separar y organizar de manera más efectiva
            los archivos de código de JavaScript. Hasta aquí llegó el proyecto con vanila JS.
        </p>
        <h2>React.js</h2>

        <p>
            Si bién la cursada no lo pedía, al final de la misma tuvimos una introducción 
            a la librería de React. Es entonces, que con esta información, ejercicios prácticos 
            presentes en la lectura y algo más de información de internet, decidí transformar 
            el proyecto inicial a React.js. He de aquí que nace esta web.
        </p>

        <p>
            Como esencialmente es un ejercicio, hay muchos elementos que combinan distintas 
            maneras de hacer lo mismo, como pueden ser 3 maneras de aplicar CSS, o 3 maneras 
            de crear los componentes, esto fue el resultado de la práctica y de distintas pruebas,
             y decido conservarlo a modo de "backup".
        </p>

        <h3>Este proyecto contiene:</h3>
        <ul>
            <li>React</li>
            <li>React-router-dom</li>
            <li>Styled Components</li>
            <li>Miligram (libraría front al estilo Bootstrap)</li>
        </ul>
        <hr />
        <p>Gracias por visitar mi proyecto, ¡Espero que te haya resultado de interés!</p>
    </div>
  )
}

export default About