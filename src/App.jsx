import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ParentComponent from './components/ParentComponent';
import Contador from './components/Contador';
import SaludoUsuario from './components/SaludoUsuario';
import BotonSesion from './components/BotonSesion';
import Advertencia from './components/Advertencia';
import Mensaje from './components/Mensaje';
import { useState } from 'react';
import Producto from './components/Producto';
import CustomButton from './components/CustomButton'
import MyComponent from './components/MyComponent';
import BotonStyled from './components/BotonStyled';
import BotonStyled2 from './components/BotonStyled2';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import Fetching from './components/Fetching';


const Home = ()=>{
  return <h1>Pagina principal</h1>
}
const About = ()=>{
  return <h1>Acerca de nosotros</h1>
}

function App() {

  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to='/' >Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/about' >Nosotros</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path={'/'} exact Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/products/:id' Component={ProductDetails}></Route>
        </Routes>
      </BrowserRouter>
      <main>
        <p>
          Hacer el boton de cerrar sesión solamente si el usuario esta logeado, para que sea más fácil 
          y entendible. Incorporar bootstrapp
        </p>
          <br />
          <ParentComponent></ParentComponent>
          <br />
          <Contador valorInicial = {3} ></Contador>
          <br />
          <SaludoUsuario estaLogueado = {false}></SaludoUsuario>
          <SaludoUsuario estaLogueado = {true}></SaludoUsuario>
          <br />
          <br />
          <BotonSesion estaLogueado = {true}></BotonSesion>
          <br />
          <br />
          <Advertencia warn = {true}></Advertencia>
          <br />
          <br />
          <h2>Prueba de impresión de mensaje condicional</h2>
          <div>
              <button onClick={()=> setMostrarMensaje(!mostrarMensaje)}>
                  {mostrarMensaje ? 'Ocultar' : 'Mostrar'} Mensaje
              </button>
              {mostrarMensaje && <Mensaje/>}
          </div>
          <br />
          <br />
          <Producto></Producto>
          <br />
          <br />
          <CustomButton></CustomButton>
          <br />
          <br />
          <MyComponent></MyComponent>
          <br />
          <br />
          <BotonStyled></BotonStyled>
          <br />
          <br />
          <BotonStyled2></BotonStyled2>
          <br />
          <br />
          <Fetching></Fetching>
          <br />
          <br />
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
