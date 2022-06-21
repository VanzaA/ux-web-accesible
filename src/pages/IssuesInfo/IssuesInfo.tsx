import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/button";
import "./index.css";

const IssuesInfo = () => {
  const title = "Sobre denuncias";
  useEffect(() => {
    const header = document.querySelector("#mobile-header");
    if (header) header.textContent = title;
  }, []);

  return (
    <section id="issues-info">
      <h1 id="issues-info-header">{title}</h1>
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
      <Button type="button">
        <Link to="/createIssue">Hacer una denuncia</Link>
      </Button>
      <Button type="button">
        <Link to="/list">Ver listado de denuncias</Link>
      </Button>
    </section>
  );
};

export default IssuesInfo;
