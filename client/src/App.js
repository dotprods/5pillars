import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Packages from "./Components/Packages";

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
