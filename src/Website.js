//Resources
import "./Website.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import Navbar from "./components/Navbar.js";

//Pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Join from "./pages/Join";
import Test from "./pages/Test";

function Website() {
  return (
    <Router>
      <div className="root">
        <Navbar/>
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/events">
              <Events/>
            </Route>
            <Route path="/team">
              <Team/>
            </Route>
            <Route path="/resources">
              <Resources/>
            </Route>
            <Route path="/join">
              <Join/>
            </Route>
            <Route path="/test">
              <Test/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Website;
