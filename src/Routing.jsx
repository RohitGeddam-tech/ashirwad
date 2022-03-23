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
          <Route path="/ashirwad" exact component={Home} />
          <Route path="/Aboutus" exact component={AboutMain} />
          <Route path="/Pathological_Equipments" exact component={Path} />
        </Switch>
      </>
    </Router>
  );
};

export default Routing;
