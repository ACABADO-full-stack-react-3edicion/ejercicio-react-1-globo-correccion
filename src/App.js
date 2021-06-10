import { useState } from "react";
import { Globo } from "./componentes/Globo";
import { Marcador } from "./componentes/Marcador";

function App() {
  const getPosicionAleatoria = () => ({
    top: Math.floor(Math.random() * window.innerHeight),
    left: Math.floor(Math.random() * window.innerWidth),
  });
  const [puntos, setPuntos] = useState(0);
  const [posicion, setPosicion] = useState(getPosicionAleatoria());
  const cambiarPosicion = () => {
    setTimeout(() => {
      setPosicion(getPosicionAleatoria());
    }, 300);
  };
  const aumentaPuntos = () => {
    setPuntos(puntos + 1);
  };
  return (
    <>
      <Marcador puntos={puntos} />
      <Globo
        posicion={posicion}
        cambiarPosicion={cambiarPosicion}
        aumentaPuntos={aumentaPuntos}
      />
    </>
  );
}

export default App;
