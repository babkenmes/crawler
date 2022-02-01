import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Devices from "./Components/Devices";
import Animations from "./Components/Animations";
import Groups from "./Components/Groups";
import Containers from "./Components/Containers";
import Keywords from "./Components/Keywords";
import Dashboard from "./Components/Dashboard/Dashboard";


export default function Routes() {
  return <div>
    <Route exact path="/app/"  component={Dashboard}/>
    <Route exact path="/app/keywords"  component={Keywords}/>
    <Route exact path="/app/Devices" component={Devices}/>
    <Route exact path="/app/Animations" component={Animations}/>
    <Route exact path="/app/Groups" component={Groups}/>
    <Route exact path="/app/Containers" component={Containers}/>
  </div>
}