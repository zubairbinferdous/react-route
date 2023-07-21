/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Service = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>this is the service pages</h1>
      <h3>total {data.length}</h3>

      <div className="country">
        {data.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </div>
      
    </div>
  );
};

export default Service;
