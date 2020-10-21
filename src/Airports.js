import React from "react";
import { NavLink, Route, Switch,useRouteMatch } from "react-router-dom";
import AirportDetails from "./AirportDetails.js";
const Airports = () => 
{
  let match= useRouteMatch();
  return (
  <div>
    <ul>
      <li>
        <NavLink to={`${match.path}/rajiv`}>
          Rajiv Gandhi International Airport
        </NavLink>
      </li>
<li>
      <NavLink to={`${match.path}/bangalore`}>
         Bangahalore
        </NavLink></li>
     <li>   <NavLink to={`${match.path}/chennai`}>
         Chennai
        </NavLink></li>
      


    </ul>
    <Switch>
      <Route   path="/airports/:name" component={AirportDetails}>
        <AirportDetails data={{ name: "ramana" }} />
      </Route>
    </Switch>
  </div>
)};

export default Airports;
