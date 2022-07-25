/* eslint-disable no-restricted-globals */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import Select, { Option } from "../../components/Select/select";
import "./index.css";

const generateOnChange =
  (setInputValue: Dispatch<SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

const fontSizeOptions: Option[] = [
  { text: "Muy grande", value: "xx-large" },
  { text: "Grande", value: "x-large" },
  { text: "Normal", value: "medium" },
  { text: "Pequeño", value: "small" },
];

export type ConfigStyles = {
  fontSize?: string;
  backgroundColor?: string;
  fontColor?: string;
};

const defaultBackgroundColor = "#f5f5f5";

const onResetValues = () => {
  if (confirm("¿Desea restaurar los valores del sistema?")) {
    localStorage.removeItem("config");
    window.location.reload();
  }
};

const onSubmit = (e: any, values: ConfigStyles) => {
  e.preventDefault();
  console.log("Valores del formulario: ", values);

  if (confirm("¿Desea aplicar estos cambios a todo el sistema?")) {
    localStorage.setItem("config", JSON.stringify(values));
    window.location.reload();
  }
};

const Config = () => {
  const title = "Configuración";
  const [fontSize, setFontSize] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor
  );

  useEffect(() => {
    const header = document.querySelector("#mobile-header");
    if (header) header.textContent = title;
    const localStorageConfig: ConfigStyles = JSON.parse(
      localStorage.getItem("config") ?? "null"
    );
    setFontSize(localStorageConfig?.fontSize ?? "");
    setFontColor(localStorageConfig?.fontColor ?? "");
    setBackgroundColor(
      localStorageConfig?.backgroundColor && localStorageConfig?.backgroundColor
        ? localStorageConfig.backgroundColor
        : defaultBackgroundColor
    );
  }, []);

  return (
    <section id="config">
      <h1 id="config-header">{title}</h1>
      <div className="config-example">
        <form
          className="config-form"
          onSubmit={(e) =>
            onSubmit(e, {
              fontSize,
              fontColor,
              backgroundColor,
            })
          }
        >
          <Select
            id="category"
            label="Tamaño de letra"
            name="category"
            onChange={generateOnChange(setFontSize)}
            value={fontSize}
            placeholder="Seleccione el tamaño de los párrafos"
            options={fontSizeOptions}
          />
          <Input
            id="fontColor"
            label="Color de la tipografía"
            name="fontColor"
            onChange={generateOnChange(setFontColor)}
            value={fontColor}
            placeholder="Color de la tipografía"
            type="color"
          />
          <Input
            id="backgroundColor"
            label="Color de fondo de la pagina"
            name="backgroundColor"
            onChange={generateOnChange(setBackgroundColor)}
            value={backgroundColor}
            placeholder="Color de fondo de la pagina"
            type="color"
          />
          <div className="config-actions">
            <Button type="submit">
              <span>Aplicar cambios</span>
            </Button>
            <Button type="button" onClick={onResetValues}>
              <span>Reiniciar valores</span>
            </Button>
          </div>
        </form>
        <p style={{ backgroundColor, color: fontColor, fontSize }}>
          Texto de ejemplo
        </p>
      </div>

      <strong>
        <p>Notas:</p>
        <ul>
          <li>El tamaño seleccionado solo afecta a los párrafos.</li>
          <li>
            El color de la tipografía afecta a todos los textos del sistema.
          </li>
          <li>El color de fondo afecta a todas las paginas del sistema.</li>
        </ul>
      </strong>
    </section>
  );
};

export default Config;
