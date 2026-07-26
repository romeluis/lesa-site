//Resources
import "./Website.css";
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';

//Components
import Navbar from "./components/Navbar.js";
import ErrorBoundary from "./components/ErrorBoundary";

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

//Kept inside the Router so the boundary can reset itself on navigation
function Pages() {
  const location = useLocation();

  return (
    <ErrorBoundary resetKey={location.pathname}>
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
    </ErrorBoundary>
  );
}

function Website() {
  return (
    <Router>
      <div className="root">
        <Navbar/>
        <div className="main-content">
          <Pages/>
        </div>
      </div>
    </Router>
  );
}

export default Website;
