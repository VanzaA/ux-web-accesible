import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import Checkbox from "../../components/Checkbox/checkbox";
import "./index.css";
import { useNavigate } from "react-router-dom";

const generateOnChange =
  (setInputValue: Dispatch<SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputValue(event.target.value);
  };

type SubmitFormData = {
  email: string;
  password: string;
};

const onSubmit = (
  e: any,
  values: SubmitFormData,
  callback: (route: string) => void
) => {
  e.preventDefault();
  fetch(process.env.REACT_APP_API + "/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(() => {
      alert("Inicio sesión correctamente");
      localStorage.setItem("session", JSON.stringify({ values }));
      callback("/");
    })
    .catch(() => {
      alert("Usuario o contraseña incorrecto.");
    });
};

const Login = () => {
  const title = "Iniciar sesión";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const header = document.querySelector("#mobile-header");
    if (header) header.textContent = title;
  }, []);

  return (
    <section id="login">
      <h1 id="login-header">{title}</h1>
      <form
        className="login-form"
        onSubmit={(e) =>
          onSubmit(
            e,
            {
              email,
              password,
            },
            navigate
          )
        }
      >
        <Input
          id="email"
          label="Email"
          name="email"
          onChange={generateOnChange(setEmail)}
          value={email}
          placeholder="Email"
          type="email"
          required={true}
        />
        <Input
          id="password"
          label="Contraseña"
          name="password"
          onChange={generateOnChange(setPassword)}
          value={password}
          placeholder="Contraseña"
          type={showPassword ? "text" : "password"}
          required={true}
        />
        <Checkbox
          name="showPassword"
          checked={showPassword}
          label="Mostrar contraseña"
          onChange={() => setShowPassword((state) => !state)}
        />
        <Button type="submit">
          <span>Iniciar sesion</span>
        </Button>
      </form>
    </section>
  );
};

export default Login;
