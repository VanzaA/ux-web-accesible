import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/home";
import Info from "./pages/Info/info";
import IssuesList from "./pages/Issues/issues";
import IssuesInfo from "./pages/IssuesInfo/IssuesInfo";
import IssueForm from "./pages/IssueForm/issueForm";

const Profile = () => <h1>My Profile</h1>;

const App = () => (
  <>
    <Navbar />
    <main>
      <Routes>
        <Route element={<Info />} path="info" />
        <Route element={<IssuesList />} path="list" />
        <Route element={<IssueForm />} path="submitIssue" />
        <Route element={<IssuesInfo />} path="about" />
        <Route element={<Profile />} path="profile" />
        <Route element={<Home />} path="" />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
