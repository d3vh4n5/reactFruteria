import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Contador from './components/Contador';
import Advertencia from './components/Advertencia';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import Fetching from './components/Fetching';

import Home from './components/Home';
import About from './components/About';
import Carrito from './components/Carrito';

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
          <Advertencia warn = {true}></Advertencia>
          <br />
          
          
          <br />
          <br />
          {/* <Fetching></Fetching> */}
          <br />
          <br />
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
