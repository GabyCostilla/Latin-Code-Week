import React from "react";
import "./Solar.css";
import SolarE from "./imgs/paneles.jpg";
import SolarE2 from "./imgs/energiaSolar.jpg";

function Solar() {
    return (
        <div className="solar-container">
            <header className="solar-header">
                <h1>Energía Solar</h1>
            </header>
            <main className="solar-content">
                <img
                    src={SolarE}
                    alt="Energía Geotérmica"
                />
                <p>
                La energía solar es una energía renovable, obtenida a partir del aprovechamiento
                de la radiación electromagnética procedente del Sol. La radiación solar que 
                alcanza la Tierra ha sido aprovechada por el ser humano desde la antigüedad, 
                mediante diferentes tecnologías que han ido evolucionando. 
                Hoy en día, el calor y la luz del Sol pueden aprovecharse por medio de diversos 
                captadores como células fotoeléctricas. 
                </p>
                <h2>como se produce?</h2>
                <p>
                Las células solares fotovoltaicas convierten la luz del sol 
                directamente en electricidad por el llamado efecto fotoeléctrico, 
                por el cual determinados materiales son capaces de absorber fotones 
                (partículas lumínicas) y liberar electrones, generando una corriente eléctrica.
                </p>
                <img
                    src={SolarE2}
                    alt="Energía Solar"
                    
                />
                <p>
                    En Resumen:
                Reduce significativamente la huella de carbono. Es una energía limpia 
                que no genera gases de efecto invernadero ni contaminación durante su uso.
                Se trata de una energía renovable y sostenible.
                Puede calentar, algo que otras energías renovables no ofrecen.
                No requiere de la extracción de materiales de ningún tipo  para funcionar. 
                Esto supone un mayor ahorro.
                La luz solar es muy abundante y el uso de paneles solares se puede 
                aprovechar en cualquier lugar. Esto es especialmente útil en zonas en las que resulta complicado crear sistemas de cableado, por ejemplo.
                Reduce la dependencia del exterior para este tipo de suministros.
                Conserva los recursos naturales al disminuir la necesidad de 
                los combustibles fósiles.
                Permite ahorrar en el consumo energético y las facturas.

                </p>
            </main>
        </div>
    );
}

export default Solar;
