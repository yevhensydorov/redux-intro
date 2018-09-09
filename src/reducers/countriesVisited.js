function countriesVisited(state = { countries: [] }, action) {
  switch (action.type) {
    case "ADD_COUNTRY":
      let outputObject = Object.assign({}, state);
      outputObject.countries = [...outputObject.countries, action.country];
      return outputObject;
    case "DELETE_COUNTRY":
      let outputObject2 = Object.assign({}, state);
      let filteredArr = outputObject2.countries.filter(country => {
        return (
          country.toLowerCase().indexOf(action.country.toLowerCase()) === -1
        );
      });
      outputObject2.countries = filteredArr;
      return outputObject2;
    default:
      return state;
  }
}

export default countriesVisited;
