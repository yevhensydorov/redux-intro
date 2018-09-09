import React from "react";

function CountriesVisited({ countries, dispatch }) {
  function handleClick(country) {
    dispatch({
      type: "DELETE_COUNTRY",
      country: country
    });
  }
  let countriesList = countries.map((country, key) => {
    return (
      <li key={key} onClick={event => handleClick(country)}>
        {country}
      </li>
    );
  });
  return <ul>{countriesList}</ul>;
}

export default CountriesVisited;
