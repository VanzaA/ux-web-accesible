import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { CenterOfLaPlata } from "../../index";
import "./index.css";

type MarkerInfo = {
  position: LatLngExpression;
  TextInfo: string;
};

const markers: MarkerInfo[] = [
  {
    TextInfo: "lorem impsum dolor sit amet, consectetur adipiscing",
    position: [-34.93593258401855, -57.949705123901374],
  },
  {
    TextInfo: "lorem impsum dolor sit amet, consectetur adipiscing",
    position: [-34.921425585744785, -57.95279502868653],
  },
  {
    TextInfo: "lorem impsum dolor sit amet, consectetur adipiscing",
    position: [-34.91881968811382, -57.96635627746583],
  },
  {
    TextInfo: "lorem impsum dolor sit amet, consectetur adipiscing",
    position: [-34.9251582138739, -57.97021865844727],
  },
];

const IssuesList = () => {
  const title = "Listado de denuncias";
  useEffect(() => {
    const header = document.querySelector("#mobile-header");
    if (header) header.textContent = title;
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
        {markers.map((marker) => (
          <Marker position={marker.position} key={`${marker.position}`}>
            <Popup closeButton={false}>
              <h3>Informacion de la denuncia</h3>
              <span>{marker.TextInfo}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default IssuesList;
