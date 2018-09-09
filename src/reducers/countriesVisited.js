function countriesVisited(state = { countries: [] }, action) {
  switch (action.type) {
    case "ADD_COUNTRY":
      let outputObject = Object.assign({}, state);
      outputObject.countries = [...outputObject.countries, action.country];
      return outputObject;
    default:
      return state;
  }
}

export default countriesVisited;
