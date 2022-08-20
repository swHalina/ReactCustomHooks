import logo from './logo.svg';
import './App.css';
// import MiComponente from './components/MiComponente';
// import SegundoComponente from './components/SegundoComponente';
// import { PruebasCustom } from './components/PruebasCustom';
import { TercerComponente, CuartoComponente } from './components/TercerComponente';
import SegundoComponente from './components/SegundoComponente';
import MiComponente from './components/MiComponente';
import { EventosComponente } from './components/EventosComponente';
import { AvisoComponent } from './components/useEffect/AvisoComponent';
import { PruebasComponent } from './components/useEffect/PruebasComponent';
import { AjaxComponent } from './components/AjaxComponent';

function App() {

  const ficha_medica = {
    altura: "187cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  const numero = 12345;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido a mi pagina web</p>
        <hr />
        <PruebasComponent />
        <hr />
        <AjaxComponent />
      </header>
    </div>
  );
}

export default App;
