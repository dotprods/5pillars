import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Packages from "./Components/Packages";
import QaidaEnrol from "./Components/QaidaEnrol";
import AboutUs from "./Components/AboutUs";
import HifdhEnrol from "./Components/HifdhEnrol";
import IslamicStudiesEnrol from "./Components/IslamicStudiesEnroll";
import Tutors from "./Components/Tutors";
import Projects from "./Components/Projects";
import ContactUs from "./Components/ContactUs";
import EnrolForm from "./Components/EnrolForm";
import NewHome from "./Components/NewHome";
import TutorForm from "./Components/TutorForm";
import HotEventPage from "./Components/HotEventPage";
import Webinar from "./Components/Webinar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/register" element={<EnrolForm />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/qaida" element={<QaidaEnrol />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/hifdh" element={<HifdhEnrol />} />
        <Route path="/islamicStudies" element={<IslamicStudiesEnrol />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/tutorForm" element={<TutorForm />} />
        <Route path="/event" element={<HotEventPage />} />
        <Route path="/webinar" element={<Webinar />} />
      </Routes>
    </>
  );
}

export default App;
