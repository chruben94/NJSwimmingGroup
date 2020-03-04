import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointments from "./pages/Appointments";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import AllNav from "./components/Nav";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Instructors from "./pages/Instructors";
import Pools from "./pages/Pools";
import AboutUs from "./pages/AboutUs";
import fire from "./pages/Fire";
import Login from "./pages/Login";


function App() {
 
  return (
    <Router>
      <div>
        <AllNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutUs" component={AboutUs} />
          {/* <Route exact path="/appointments" component={Appointments} /> */}
          <Route exact path="/appointments/:id" component={Detail} />
          <Route exact path="/Schedule" component={Schedule} />
          <Route exact path="/Instructors" component={Instructors} />
          <Route exact path="/Pools" component={Pools} />
          <Route exact path="/Login" component={Login} />




          {/* <Route exact path="/Pools" component={Pools} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/appointments/:id" component={Detail} />  */}

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
