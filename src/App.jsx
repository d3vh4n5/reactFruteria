import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ParentComponent from './components/ParentComponent';
import Contador from './components/Contador';
import SaludoUsuario from './components/SaludoUsuario';
import BotonSesion from './components/BotonSesion';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
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
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
