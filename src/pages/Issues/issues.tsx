import { LatLngExpression } from "leaflet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { CenterOfLaPlata } from "../../index";
import { categoriesOptions } from "../IssueForm/issueForm";
import "./index.css";

type APIIssue = {
  email: string;
  address: string;
  city: string;
  category: string;
  description: string;
  coordinates: string;
};

type Issue = {
  email: string;
  address: string;
  city: string;
  category: string;
  description: string;
  coordinates: LatLngExpression;
};

const convertCategory = (value: string) =>
  categoriesOptions.find((category) => category.value === value)?.text;

const getIssues = (setIssues: Dispatch<SetStateAction<Issue[]>>) => {
  fetch(process.env.REACT_APP_API + "/issues", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((json: APIIssue[]) => {
      const mappedResponse = json.map((issue) => {
        console.log(issue.coordinates);
        const parsedCoordinates = JSON.parse(issue.coordinates) as any;
        return {
          ...issue,
          coordinates: { lat: parsedCoordinates[0], lng: parsedCoordinates[1] },
        };
      });
      setIssues(mappedResponse);
    })
    .catch((err) => {
      console.error(err);
      alert("Error al obtener las denuncias.");
    });
};

const IssuesList = () => {
  const title = "Listado de denuncias";
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const header = document.querySelector("#mobile-header");
    if (header) header.textContent = title;
    getIssues(setIssues);
  }, []);

  return (
    <section id="issues-list">
      <h1 id="issues-list-header">{title}</h1>
      <MapContainer
        center={CenterOfLaPlata}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: "80vw", height: "70vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {issues.map((issue) => (
          <Marker position={issue.coordinates} key={`${issue.coordinates}`}>
            <Popup closeButton={false}>
              <h3>Información de la denuncia</h3>
              <span>Categoría: {convertCategory(issue.category)}</span>
              <br />
              <span>Descripción: {issue.description}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <strong>
        <span>
          Nota: Al clickear en un marcador, se pueden ver detalles de las
          denuncias
        </span>
      </strong>
    </section>
  );
};

export default IssuesList;
