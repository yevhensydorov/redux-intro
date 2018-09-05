import React from "react";
import cx from "classnames";

const buttons = ["Camel", "Duck", "Donut", "Potato", "Mash potato"];

function VotingButtons({ selectedButton, dispatch }) {
  function handleClick(button) {
    dispatch({
      type: "SELECT_BUTTON",
      selectedButton: button
    });
  }

  return (
    <div>
      {buttons.map(button => {
        const classes = cx("voting-button", {
          "voting-button--selected": selectedButton === button
        });
        return (
          <button
            key={button}
            className={classes}
            onClick={event => handleClick(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default VotingButtons;
