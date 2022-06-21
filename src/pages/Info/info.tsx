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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id
        leo congue, consectetur diam finibus, vestibulum augue. In hac habitasse
        platea dictumst. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Praesent ornare mollis diam.
        Aenean quis suscipit lacus, at pellentesque nisi. Nullam diam nunc,
        luctus nec enim quis, congue congue purus. Cras quis justo eget massa
        facilisis viverra sit amet a massa. Sed varius dapibus risus vel
        finibus. Etiam ut rhoncus ex. Fusce egestas felis in orci euismod
        rutrum. Ut bibendum finibus porttitor. Vestibulum a ipsum mattis,
        commodo massa sodales, volutpat risus. Quisque gravida massa a diam
        pellentesque dapibus. Curabitur quis facilisis libero.
      </p>
      <p>
        Pellentesque placerat vel urna ac aliquet. Donec sem massa, dapibus ut
        mollis vel, rutrum porttitor lectus. Nullam suscipit metus et molestie
        mollis. Maecenas in orci magna. Aenean in maximus tortor. In et dictum
        massa. Mauris quis consectetur mi, sit amet elementum massa. Cras dui
        nisi, hendrerit rutrum tempus id, lacinia et est. In scelerisque quis
        erat porttitor ultrices. Proin elementum arcu sit amet elit semper,
        tincidunt volutpat tortor pretium. Etiam malesuada lorem vitae feugiat
        dignissim. Suspendisse at urna dignissim, dignissim augue id, posuere
        erat. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Sed ac rhoncus sapien. Sed ante
        dolor, pretium vitae urna et, sagittis interdum tellus.
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
