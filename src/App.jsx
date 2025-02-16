import "./App.css";
import freeCodeCampLogo from "./Imagenes/icono-clic-blanco.png";
import Boton from "./Componentes/Boton";
import Contador from "./Componentes/Contador";
import {useState} from "react";

function App() {
  // Funciones
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };

  const [numClics, setNumClics] = useState(0);

  // Retorno
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        {/* Contador */}
        <Contador numClics={numClics} />
        {/* Botón clic */}
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        {/* Botón restart */}
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
