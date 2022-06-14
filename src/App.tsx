import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const Home = () => <h1>Home</h1>;
const Info = () => <h1>Info</h1>;
const List = () => <h1>List</h1>;
const Submit = () => <h1>Submit</h1>;
const About = () => <h1>About</h1>;

const App = () => (
  <>
    <Navbar />
    <main>
      <Routes>
        <Route element={<Info />} path="info" />
        <Route element={<List />} path="list" />
        <Route element={<Submit />} path="submit" />
        <Route element={<About />} path="about" />
        <Route element={<Home />} path="" />
      </Routes>
    </main>
    <footer />
  </>
);

export default App;
