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
        <img src={SolarE} alt="Energía Geotérmica" />
        <p>
        La energía solar es una energía renovable, obtenida a partir del
        aprovechamiento de la radiación electromagnética procedente del Sol.
        La radiación solar que alcanza la Tierra ha sido aprovechada por el
        ser humano desde la antigüedad, mediante diferentes tecnologías que
        han ido evolucionando. Hoy en día, el calor y la luz del Sol pueden
        aprovecharse por medio de diversos captadores como células
        fotovoltaicas.
        </p>
        <h2>¿Cómo se produce?</h2>
        <p>
        Las células solares fotovoltaicas convierten la luz del sol
        directamente en electricidad mediante el llamado efecto fotoeléctrico,
        por el cual determinados materiales son capaces de absorber fotones
        (partículas lumínicas) y liberar electrones, generando una corriente
        eléctrica.
        </p>
        <img src={SolarE2} alt="Energía Solar" />
        <p>
        En resumen: Reduce significativamente la huella de carbono. Es una
        energía limpia que no genera gases de efecto invernadero ni
        contaminación durante su uso. Se trata de una energía renovable y
        sostenible. Puede generar calor, algo que otras energías renovables no
        ofrecen. No requiere la extracción de materiales de ningún tipo para
        funcionar. Esto supone un mayor ahorro. La luz solar es muy abundante
        y el uso de paneles solares se puede aprovechar en cualquier lugar.
        Esto es especialmente útil en zonas donde resulta complicado crear
        sistemas de cableado, por ejemplo. Reduce la dependencia del exterior
        para este tipo de suministros. Conserva los recursos naturales al
        disminuir la necesidad de combustibles fósiles. Permite ahorrar en el
        consumo energético y en las facturas.
        </p>
    </main>
    </div>
);
}

export default Solar;
