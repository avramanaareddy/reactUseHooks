import React from "react";
import {withRouter,useLocation,useHistory,useParams,useRouteMatch} from 'react-router-dom'
const AirportDetails = (props) => {
 //usage of the react use hooks
 let pathName=useLocation();
 let params=useParams();
 let history=useHistory();
 let routeMatch=useRouteMatch();
  console.log('Path Name',pathName);
  console.log('Params ',params);
  console.log('history ',history);
  console.log('route match ',routeMatch);

  return (
    <div>
      <h2> Path name: {pathName.pathname}</h2>
      <h2> Parameters: {JSON.stringify(params)}</h2>
      <h2> route match: {JSON.stringify(routeMatch)}</h2>
      
      <button type="button" onClick={ ()=>(history.goBack())}>Go Back</button>
    </div>
  );
};
export default withRouter(AirportDetails);