import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./App";
import AboutMain from "./Components/About/AboutMain";
import Path from "./Components/Path";

const Routing = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Aashirwad" exact component={Home} />
          <Route path="/About" exact component={AboutMain} />
          <Route path="/Path" exact component={Path} />
        </Switch>
      </>
    </Router>
  );
};

export default Routing;
