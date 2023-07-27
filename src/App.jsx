import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails';

import Home from './components/Home';
import About from './components/About';
import Carrito from './components/Carrito';
import ocultarMenu from './ocultarMenu'


// const botones = document.querySelectorAll('.btnMenu')
//       const check = document.querySelector('#check')

//       console.log(botones);

//       botones.forEach(boton=>{
//         boton.addEventListener('click', ()=>{
//           check.checked = false
//         })
//       })
function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        
        <Routes>
          <Route path={'/'} exact Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/carrito' Component={Carrito}></Route>
          <Route path='/products/:id' Component={ProductDetails}></Route>
        </Routes>
      </BrowserRouter>
      <main>
        
          <br />
          
      </main>
      <Footer></Footer>
    </div>
    
    );
  }
  
  setInterval(()=>{
    ocultarMenu()
  }, 1000)


  export default App;
  