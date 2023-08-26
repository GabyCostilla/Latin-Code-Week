import React from "react";
import "./hidro.css"; // Asegúrate de tener el archivo CSS correspondiente
import HydroImage from "./imgs/hydroelectrica.jpg"; // Asegúrate de tener la imagen correspondiente
import HydroProductionImage from "./imgs/hidro_prod.jpg"; // Asegúrate de tener la imagen correspondiente

function Hydro() {
    return (
        <div className="hydro-container">
            <header className="hydro-header">
                <h1>💧 Energía Hidroeléctrica 🌊</h1>
            </header>
            <main className="hydro-content">
                <img
                    src={HydroImage}
                    alt="Energía Hidroeléctrica"
                    className="hydro-image"
                />
                <p>
                    La energía hidroeléctrica es una forma de energía renovable
                    que se obtiene del movimiento del agua, como ríos o
                    corrientes, para generar electricidad. Aprovecha la energía
                    cinética del agua en movimiento y su caída desde alturas
                    elevadas. 🌊⚡
                </p>
                <h2>Proceso de Generación 🌀</h2>
                <p>
                    Las centrales hidroeléctricas capturan la energía del agua
                    en movimiento mediante turbinas conectadas a generadores.
                    Cuando el agua fluye a través de las turbinas, su energía
                    cinética se convierte en energía mecánica, que luego se
                    transforma en energía eléctrica. 🏞️⚙️
                </p>
                <img
                    src={HydroProductionImage}
                    alt="Generación Hidroeléctrica"
                    className="hydro-image"
                />
                <p>
                    En resumen, la energía hidroeléctrica es una fuente de
                    energía limpia y confiable que no produce emisiones
                    directas de gases de efecto invernadero ni depende de
                    combustibles fósiles. Además, las presas hidroeléctricas
                    pueden proporcionar almacenamiento de agua y control de
                    inundaciones. Es una solución sostenible para la
                    generación de electricidad en muchas partes del mundo.
                    🌍🛢️
                </p>
            </main>
        </div>
    );
}

export default Hydro;
