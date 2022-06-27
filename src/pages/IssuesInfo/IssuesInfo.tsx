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
        Mantenganse informado sobre los lugares donde se han hechos denuncias por posibles inundaciones
        o puede hacer alguna si cree que hay alguna zona de posible inundacion y que otros usuarios puedan informarse.
      </p>
      <p>
        Las denuncias revisadas y aceptadas, mostraran las coordenas en el mapa de la ciudad de La Plata y un pequeno texto
        con informacion.
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
