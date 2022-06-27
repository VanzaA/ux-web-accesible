import { useEffect } from "react";
import "./index.css";

const Info = () => {
  const title = "Informacion util en caso de inundacion";

  useEffect(() => {
    const header = document.querySelector("#mobile-header");
    if (header) header.textContent = title;
  }, []);

  return (
    <section id="info">
      <h1 id="info-header">{title}</h1>
      <p>
        Algunas recomendaciones durante una inundacion
        <ul>
          <li>Guardar en un buen lugar algo de comida, agua y ropa.</li>
          <li>Mover a un lugar alto los elementos de más valor.</li>
          <li>Esté preparado para cortar la electricidad cuando haya agua estancada o cables del tendido eléctrico caídos.</li>
          <li>Colocar documentos importantes en una bolsa de plástico para que no se destruyan con el agua.</li>
          <li>Tener a mano una linterna y asegurarse de que tenga pilas.</li>
        </ul>
      </p>
      <p>
        Nam at sollicitudin ante, ac finibus enim. Suspendisse ullamcorper,
        velit in volutpat pellentesque, justo metus porta mauris, a condimentum
        lectus elit non mi. Morbi porttitor molestie ex, a ultrices lacus
        condimentum non. Morbi purus urna, interdum hendrerit velit non, egestas
        aliquam elit. Pellentesque convallis eleifend nibh, ac cursus massa
        porttitor eget. Nullam scelerisque mauris quis est imperdiet, id ornare
        mi vestibulum. Nullam faucibus urna tincidunt erat convallis, nec
        porttitor tortor molestie. Sed nec magna at mi consectetur gravida ac
        eget eros. Praesent volutpat lorem in velit tempus vehicula. Suspendisse
        nec massa magna.
      </p>
      <p>
        Morbi feugiat tortor ut nulla fermentum, at tristique eros sagittis.
        Pellentesque tellus metus, vulputate commodo eros quis, dictum rutrum
        sem. Nullam consequat leo vitae condimentum rhoncus. Cras lobortis
        mollis quam et porttitor. Sed consequat urna augue, nec maximus magna
        consectetur vitae. Phasellus et aliquam tortor. Nam fringilla justo
        ante, eu pulvinar mauris tincidunt vel. Nullam eu enim lectus. Duis eget
        ante suscipit, commodo neque vel, euismod neque. Duis accumsan magna
        dui, nec elementum odio gravida non.
      </p>
      <p>
        Donec metus elit, pulvinar id faucibus ullamcorper, egestas et nisl.
        Praesent euismod venenatis scelerisque. Nunc elementum ex purus, sit
        amet cursus erat aliquam massa quis, luctus tristique lorem.{" "}
      </p>
    </section>
  );
};

export default Info;
