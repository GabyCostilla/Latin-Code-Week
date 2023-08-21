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
            <animated.h6 style={fadeIn}>¡Haz clic en uno de los botones para saber más!</animated.h6>
          </div>
          <div className="image-container">
            <img src="https://www.portalsolar.com.br/_next/image?url=https%3A%2F%2Finstitucional-and-info-production.s3.us-east-2.amazonaws.com%2Fimages%2F62c812d3-77bf-471f-bd45-1393eec5b0aa%2Fenergia-solar.jpg&w=3840&q=100" alt="paneles solares" />

          </div>
        </div>
      </header>
    </animated.div>
  );
}

export default Home;
