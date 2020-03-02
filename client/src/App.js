import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointments from "./pages/Appointments";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import AllNav from "./components/Nav";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <AllNav />
        <Switch>
          <Route exact path="/" component={Appointments} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/appointments/:id" component={Detail} />
          <Route exact path="/AboutUs" component={AboutUs} />

          {/* <Route exact path="/" component={Home} />
          
          <Route exact path="/Schedule" component={Schedule} />
          <Route exact path="/Instructors" component={Instructors} />
          <Route exact path="/Locations" component={Locatiom} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/appointments/:id" component={Detail} /> */}

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
