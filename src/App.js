import React from "react";
import { Route,Link,NavLink, Switch } from "react-router-dom";
import "./styles.css";
import Home from "./Home.js";
import Airports from "./Airports.js";
import Cities from "./Cities.js";
export default function App() {
  return (
<>
    <div className="App">
      <h1>This is to learn routing</h1>
      <ul>
        <li>
{/**  
   Usage of navlink makes the class="active" for the link.
  it will not keep any href to the link.

  wrapping the switch to route
Switch usage is not make the splitting of the link.
example is if you give /cities, then it spints / and cities separately.
to avoid that and execute only one link then use the switch


*/}
           <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/airports">Airports</NavLink>
        </li>
        <li>
          <NavLink to="/cities">Cities</NavLink>
        </li>
      </ul>
<div>
      <Switch>
{/**  
whenever you get the exact match of the / then only go to the home component, 
if not route to the specific component. so use exact to the route
*/}
      <Route exact path="/" component={Home} />
      <Route   path="/airports" component={Airports} />
      <Route   path="/cities" component={Cities} />
      </Switch>
      </div>
    </div>
    </>
  );
}
