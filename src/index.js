import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import rootReducer from "./reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
