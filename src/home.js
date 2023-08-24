import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import "./home.css";

function Home() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.slow });
  const slideInFromTop = useSpring({ top: "0", from: { top: "-100px" }, config: config.wobbly });

  return (
    <animated.div className="App" style={fadeIn}>
      <header className="App-header">
        <animated.h1 style={slideInFromTop}>Bienvenidos a Renewable Energy</animated.h1>
        <p>Explora el mundo de las energías renovables</p>
        <div className="container">
          <div className="links">
            <Link to="/solar" className="button solar">Energía Solar</Link>
            <Link to="/eolica" className="button eolico">Energía Eólica</Link>
            <Link to="/geotermica" className="button geotermico">Energía Geotérmica</Link>
            <p className="mini">¡Haz clic en uno de los botones para saber más!</p>
          </div>
          <div className="image-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Bow_Lake_beim_Icefields_Parkway.jpg" alt="paneles solares" />

          </div>
        </div>
      </header>
    </animated.div>
  );
}

export default Home;
