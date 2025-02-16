import PropTypes from "prop-types";
import "../hojas-de-estilo/Contador.css";

function Contador({numClics}) {
  return <div className="contador">{numClics}</div>;
}

Contador.propTypes = {
  numClics: PropTypes.number,
};

export default Contador;
