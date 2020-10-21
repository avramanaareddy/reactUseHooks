import React from "react";
import {NavLink,Route, Switch} from 'react-router-dom';
import CityDetails from './CityDetails.js'
const Cities = () => (
  <div>
    <ul>
      
      <li><NavLink to="/cities/hyderabad">Hyderabad</NavLink></li>
      <li><NavLink to="/cities/bangalore">Bengaluru</NavLink></li>
      <li><NavLink to="/cities/chennai">Chennai</NavLink></li>
    </ul>
    <Switch>
<Route  path="/cities/:cityName" component={CityDetails}>
<CityDetails data={{name:'ramana'}}/>
</Route>
</Switch>
  </div>
);

export default Cities;
