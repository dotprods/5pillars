import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Packages from "./Components/Packages";
import QaidaEnrol from "./Components/QaidaEnrol";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/register" component={Register} exact>
            <Register />
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
