import React from "react";
import {withRouter} from 'react-router-dom'
const CityDetails = (props) => {
  //usage of props, match, history etcc.
  console.log('props details',props);
  return (
    <div>
      <h2>Path name: {props.location.pathname}</h2>
      <h1>{props.match.params.cityName}   is a big city</h1>
      <button type="button" onClick={props.history.goBack}>Go Back</button>
      <button type="button" onClick={ ()=>{props.history.goBack()}}>Go Back</button>
    </div>
  );
};
export default withRouter(CityDetails);