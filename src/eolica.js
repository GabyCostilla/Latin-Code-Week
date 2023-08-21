import React from "react";
import "./Eolica.css";
import WindEnergy from "./imgs/wind.jpg";
import WindTurbine from "./imgs/WindTurbine.jpg";

function Eolica() {
    return (
        <div className="eolica-container">
            <header className="eolica-header">
                <h1>Energía Eólica</h1>
            </header>
            <main className="eolica-content">
                <img
                    src={WindEnergy}
                    alt="Energía Eólica"
                    className="eolica-image"
                />
                <p>
                    La energía eólica es una fuente de energía renovable que
                    aprovecha la fuerza del viento para generar electricidad. Se
                    basa en la conversión de la energía cinética del viento en
                    energía mecánica a través de aerogeneradores, que luego se
                    transforma en energía eléctrica.
                </p>
                <p>
                    Los aerogeneradores están compuestos por hélices o palas que
                    giran con el viento. La energía cinética del viento hace que
                    las palas giren, lo que activa un generador que produce
                    electricidad. La energía eólica es una fuente limpia y
                    renovable que contribuye a la reducción de emisiones de
                    gases de efecto invernadero.
                </p>
                <h1>Y como funciona una turbina eolica?</h1>
                <p>
                    Para comprender mejor cómo funciona una turbina eólica,
                    imagina una gran hélice conectada a un generador. Cuando el
                    viento sopla, la presión del viento hace girar las palas de
                    la turbina. A medida que las palas giran, transmiten su
                    movimiento al generador, que convierte esta energía mecánica
                    en electricidad utilizable.
                </p>
                <img
                    src={WindTurbine}
                    alt="Turbina Eólica"
                    className="eolica-image"
                />
                <p>
                    La energía eólica es una solución clave para la generación
                    sostenible de electricidad y la diversificación de la matriz
                    energética. Los parques eólicos marinos y terrestres
                    aprovechan esta fuente de energía para contribuir a un
                    futuro más limpio y sostenible.
                </p>
            </main>
        </div>
    );
}

export default Eolica;
