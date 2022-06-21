import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/home";
import IssuesList from "./pages/Issues/issues";

const Info = () => <h1>Info</h1>;
const Submit = () => <h1>Submit</h1>;
const About = () => <h1>About</h1>;
const Profile = () => <h1>My Profile</h1>;

const App = () => (
  <>
    <Navbar />
    <main>
      <Routes>
        <Route element={<Info />} path="info" />
        <Route element={<IssuesList />} path="list" />
        <Route element={<Submit />} path="submit" />
        <Route element={<About />} path="about" />
        <Route element={<Profile />} path="profile" />
        <Route element={<Home />} path="" />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
