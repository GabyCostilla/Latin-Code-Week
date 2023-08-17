import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>Promoviendo un Futuro Sostenible</h1>
        <p>
          ¡Bienvenido a nuestra página dedicada a las energías renovables! Aquí encontrarás información valiosa sobre cómo las energías limpias y sostenibles pueden transformar nuestro mundo.
        </p>
        <img src="https://images.pexels.com/photos/1292464/pexels-photo-1292464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Energías Renovables" className="energy-image" />
      </div>

      <div className="content">
        <h2>¿Qué son las Energías Renovables?</h2>
        <p>
          Las energías renovables son fuentes de energía obtenidas a partir de recursos naturales que se regeneran constantemente, como la luz solar, el viento, la biomasa y la energía geotérmica. A diferencia de los combustibles fósiles, estas fuentes no se agotan y generan menos impacto ambiental.
        </p>

        <h2>Beneficios de las Energías Renovables</h2>
        <ul>
          <li>Reducción de emisiones de gases de efecto invernadero.</li>
          <li>Disminución de la dependencia de combustibles fósiles.</li>
          <li>Creación de empleos en industrias sostenibles.</li>
          <li>Contribución a la seguridad energética a largo plazo.</li>
          <li>Reducción de la contaminación del aire y el agua.</li>
        </ul>

        <h2>Tipos de Energías Renovables</h2>
        <div className="energy-types">
          <div className="energy-type">
            <h3>Energía Solar</h3>
            <p>La energía solar se obtiene del sol a través de paneles solares que convierten la luz en electricidad. Es una fuente abundante y limpia de energía.</p>
          </div>
          <div className="energy-type">
            <h3>Energía Eólica</h3>
            <p>La energía eólica se genera mediante el viento que hace girar las aspas de los aerogeneradores. Es una fuente renovable y de bajo impacto ambiental.</p>
          </div>
          <div className="energy-type">
            <h3>Energía Biomasa</h3>
            <p>La energía biomasa proviene de materia orgánica como residuos agrícolas, forestales o desechos de alimentos. Se utiliza para producir calor y electricidad.</p>
          </div>
          <div className="energy-type">
            <h3>Energía Geotérmica</h3>
            <p>La energía geotérmica se obtiene del calor natural de la Tierra. Se utiliza para calefacción, refrigeración y generación de electricidad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
