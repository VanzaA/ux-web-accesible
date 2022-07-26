import { useEffect } from "react";
import "./index.css";

const Info = () => {
  const title = "Información util en caso de inundación";

  useEffect(() => {
    const header = document.querySelector("#mobile-header");
    if (header) header.textContent = title;
  }, []);

  return (
    <section id="info">
      <h1 id="info-header">{title}</h1>
      <p>
        Algunas recomendaciones durante una inundación
        <ul>
          <li>Guardar en un buen lugar algo de comida, agua y ropa.</li>
          <li>Mover a un lugar alto los elementos de más valor.</li>
          <li>
            Esté preparado para cortar la electricidad cuando haya agua
            estancada o cables del tendido eléctrico caídos.
          </li>
          <li>
            Colocar documentos importantes en una bolsa de plástico para que no
            se destruyan con el agua.
          </li>
          <li>Tener a mano una linterna y asegurarse de que tenga pilas.</li>
        </ul>
      </p>
    </section>
  );
};

export default Info;
