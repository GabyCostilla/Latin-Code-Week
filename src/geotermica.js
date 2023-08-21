import React from "react";
import "./Geoter.css";
import Geothermica from "./imgs/Geotermica.jpg";
import Geothermica_p from "./imgs/produccion.jpg";

function Geoter() {
    return (
        <div className="geoter-container">
            <header className="geoter-header">
                <h1>Energía Geotérmica</h1>
            </header>
            <main className="geoter-content">
                <img
                    src={Geothermica}
                    alt="Energía Geotérmica"
                    className="geoter-image"
                />
                <p>
                    La energía geotérmica es una forma de energía renovable que
                    proviene del calor natural almacenado en el interior de la
                    Tierra. Se aprovecha del calor generado por la
                    descomposición de elementos radiactivos y el calor residual
                    del proceso de formación de la Tierra.
                </p>
                <h2>como se produce?</h2>
                <p>
                    Esta forma de energía puede ser utilizada para la generación
                    de electricidad y calefacción. Las plantas geotérmicas
                    pueden convertir el calor interno de la Tierra en energía
                    eléctrica mediante el uso de vapor o agua caliente para
                    girar turbinas y generar electricidad.
                </p>
                <img
                    src={Geothermica_p}
                    alt="Energía Geotérmica"
                    className="geoter-image"
                />
                <p>
                    En resumen la energía geotérmica se utiliza para sistemas de
                    calefacción y refrigeración geotérmica en edificios. Estos
                    sistemas aprovechan la temperatura constante del suelo para
                    climatizar de manera eficiente. ademas de tener varios
                    beneficios como ser una fuente confiable y continua de
                    energía, no depender de condiciones climáticas externas y
                    producir bajas emisiones de gases de efecto invernadero, lo
                    que la hace respetuosa con el medio ambiente.
                </p>
            </main>
        </div>
    );
}

export default Geoter;
