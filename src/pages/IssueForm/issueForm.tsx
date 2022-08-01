import { LatLngExpression, LatLngLiteral } from "leaflet";
import { json } from "node:stream/consumers";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { CenterOfLaPlata } from "../..";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import Select, { Option } from "../../components/Select/select";
import "./index.css";

type SubmitFormData = {
  email: string;
  address: string;
  city: string;
  category: string;
  description?: string;
  coordinates?: LatLngExpression;
};

export const categoriesOptions: Option[] = [
  {
    text: "Alcantarillas tapadas",
    value: "1",
  },
  {
    text: "Arboles caídos",
    value: "2",
  },
  {
    text: "Basura estancada",
    value: "3",
  },
  {
    text: "Acumulación de hojas",
    value: "4",
  },
];

const generateOnChange =
  (setInputValue: Dispatch<SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputValue(event.target.value);
  };

const onSubmit = (
  e: any,
  values: SubmitFormData,
  callback: (route: string) => void
) => {
  e.preventDefault();
  console.log("Valores del formulario: ", values);

  if (!values.coordinates) {
    alert("Por favor seleccione una zona en el mapa");
    return;
  }

  const convertedCoordinates = values.coordinates as LatLngLiteral;
  fetch(process.env.REACT_APP_API + "/issues", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      issue: {
        ...values,
        coordinates: JSON.stringify([
          convertedCoordinates.lat,
          convertedCoordinates.lng,
        ]),
      },
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(() => {
      alert(
        "Se creo la denuncia correctamente. Sera redireccionado al listado de denuncias"
      );
      callback("/list");
    })
    .catch(() => {
      alert("Ocurrió un error, intente nuevamente");
    });
};

const MapHandler = ({
  setMapCoordinates,
}: {
  setMapCoordinates: Dispatch<SetStateAction<LatLngExpression | undefined>>;
}) => {
  useMapEvent("click", (e) => {
    setMapCoordinates(e.latlng);
  });

  return <></>;
};

const IssueForm = () => {
  const title = "Cargar denuncia";
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [coordinates, setCoordinates] = useState<LatLngExpression | undefined>(
    undefined
  );
  const navigate = useNavigate();

  useEffect(() => {
    const header = document.querySelector("#mobile-header");
    if (header) header.textContent = title;
  }, []);

  return (
    <section id="issue-form">
      <h1 id="info-header">{title}</h1>
      <form
        onSubmit={(e) =>
          onSubmit(
            e,
            {
              email,
              address,
              city,
              coordinates,
              description,
              category,
            },
            navigate
          )
        }
      >
        <Input
          id="email"
          label="Email de contacto"
          name="email"
          onChange={generateOnChange(setEmail)}
          value={email}
          placeholder="Email de contacto"
          type="email"
          required={true}
        />
        <Input
          id="city"
          label="Ciudad / Provincia"
          name="city"
          onChange={generateOnChange(setCity)}
          value={city}
          placeholder="Ciudad / Provincia"
          type="input"
          required={true}
        />
        <Input
          id="address"
          label="Dirección"
          name="address"
          onChange={generateOnChange(setAddress)}
          value={address}
          placeholder="Dirección"
          type="input"
          required={true}
        />
        <Select
          id="category"
          label="Categoría"
          name="category"
          onChange={generateOnChange(setCategory)}
          value={category}
          placeholder="Seleccione categoría de la denuncia"
          required={true}
          options={categoriesOptions}
        />
        <Input
          id="description"
          label="Descripción"
          name="description"
          onChange={generateOnChange(setDescription)}
          value={description}
          placeholder="Describa su motivo de la denuncia..."
          type="input"
        />
        <MapContainer
          center={CenterOfLaPlata}
          zoom={15}
          scrollWheelZoom={false}
          style={{ width: "80vw", height: "30vh", marginTop: "30px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {coordinates && <Marker position={coordinates} />}
          <MapHandler setMapCoordinates={setCoordinates}></MapHandler>
        </MapContainer>
        <strong>
          <span>
            Nota: Es necesario marcar en el mapa la ubicación de la denuncia
          </span>
        </strong>
        <Button type="submit">
          <span>Realizar denuncia</span>
        </Button>
      </form>
    </section>
  );
};

export default IssueForm;
