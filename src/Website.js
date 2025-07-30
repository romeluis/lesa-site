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
import JoinForm from "./pages/JoinForm";
//import Test from "./pages/Test";
import EventInfo from "./components/EventInfo";
import EventForm from "./components/EventForm";
import JobInfo from "./components/JobInfo";

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
            <Route exact path="/events">
              <Events/>
            </Route>
            <Route exact path="/events/:id">
              <EventInfo/>
            </Route>
            <Route exact path="/events/:id/register">
              <EventForm/>
            </Route>
            <Route path="/team">
              <Team/>
            </Route>
            <Route path="/resources">
              <Resources/>
            </Route>
            <Route exact path="/join">
              <Join/>
            </Route>
            <Route exact path="/join/general">
              <JoinForm/>
            </Route>
            <Route exact path="/jobs/:id">
              <JobInfo/>
            </Route>
            {/*<Route path="/test">
              <Test/>
            </Route>*/}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Website;
