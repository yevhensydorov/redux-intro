import React from "react";

function CountriesVisited({ countries }) {
  let countriesList = countries.map((country, key) => {
    return <li key={key}>{country}</li>;
  });
  return <ul>{countriesList}</ul>;
}

export default CountriesVisited;
