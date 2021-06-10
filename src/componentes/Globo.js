export const Globo = (props) => {
  const { posicion, cambiarPosicion, aumentaPuntos } = props;
  return (
    <i
      className="fab fa-fly globo"
      style={{ top: posicion.top, left: posicion.left }}
      onMouseOver={cambiarPosicion}
      onClick={aumentaPuntos}
    ></i>
  );
};
