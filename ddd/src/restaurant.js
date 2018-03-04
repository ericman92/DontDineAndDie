import React from "react";
import { Link } from "react-router-dom";

const Rest = ({ name, cuisine, count, street, boro, zipcode }) => (
  <div>
    <div>
      <p>{count}</p>
      <h1>{name}{" "}{cuisine}</h1>
      <h2>{street}{boro}{zipcode}</h2>
    </div>
  </div>
);


const RandomRest = ({ name }) => (
  <ul>
    {topTenWorst.map(topTenWorst => (
      <li>
        {`/queries/${topTenWorst.dba}`}>
          {topTenWorst.dba} : {topTenWorst.violation_description}
      </li>
    ))}
  </ul>
);

export default RandomRest;

export default Rest;