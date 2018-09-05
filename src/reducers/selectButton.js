const selectButton = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_BUTTON":
      return {
        selectedButton: action.selectButton
      };
    default:
      return state;
  }
};

export default selectButton;
