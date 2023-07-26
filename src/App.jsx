import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails';

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
          
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
