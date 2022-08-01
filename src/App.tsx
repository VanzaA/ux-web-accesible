import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/home";
import Info from "./pages/Info/info";
import IssuesList from "./pages/Issues/issues";
import IssuesInfo from "./pages/IssuesInfo/IssuesInfo";
import IssueForm from "./pages/IssueForm/issueForm";
import Login from "./pages/Login/login";
import Config, { ConfigStyles } from "./pages/Config/config";

const Logout = () => {
  localStorage.removeItem("session");
  alert("Cerro sesión correctamente");

  return <Navigate to="/" />;
};

const App = () => {
  useEffect(() => {
    const localStorageConfig: ConfigStyles = JSON.parse(
      localStorage.getItem("config") ?? "null"
    );
    const body = document.querySelector("body");
    if (body) {
      const fontSize = localStorageConfig?.fontSize ?? "medium";
      const color = localStorageConfig?.fontColor ?? "black";
      const backgroundColor =
        localStorageConfig?.backgroundColor &&
        localStorageConfig?.backgroundColor
          ? localStorageConfig.backgroundColor
          : "#f5f5f5";
      var style = document.createElement("style");
      style.innerHTML = `
        body {
          background-color: ${backgroundColor};
          color: ${color};
        }

        p, ul {
          font-size: ${fontSize};
          overflow-wrap: break-word;
        }

        ul {
          max-width: 80vw;
        }

        `;
      body.appendChild(style);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route element={<Info />} path="info" />
          <Route element={<IssuesList />} path="list" />
          <Route element={<IssueForm />} path="submitIssue" />
          <Route element={<IssuesInfo />} path="about" />
          <Route element={<Config />} path="profile" />
          {/* <Route element={<Login />} path="login" />
          <Route element={<Logout />} path="logout" /> */}
          <Route element={<Home />} path="" />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
