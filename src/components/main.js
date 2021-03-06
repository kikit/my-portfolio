import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landing_page";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
