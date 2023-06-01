import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/register" component={EnrolForm} exact>
            <EnrolForm />
          </Route>
          <Route path="/packages" component={Packages} exact>
            <Packages />
          </Route>
          <Route path="/qaida" component={QaidaEnrol} exact>
            <QaidaEnrol />
          </Route>
          <Route path="/aboutus" component={AboutUs} exact>
            <AboutUs />
          </Route>
          <Route path="/hifdh" component={HifdhEnrol} exact>
            <HifdhEnrol />
          </Route>
          <Route path="/islamicStudies" component={IslamicStudiesEnrol} exact>
            <IslamicStudiesEnrol />
          </Route>
          <Route path="/tutors" component={Tutors} exact>
            <Tutors />
          </Route>
          <Route path="/projects" component={Projects} exact>
            <Projects />
          </Route>
          <Route path="/contactUs" component={ContactUs} exact>
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
