import React from "react";
import alt from "./flux";
import Lockr from "lockr";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./ticktack";

// Get the Localstorage data
const getHours = Lockr.get("hours");
if (getHours) {
  // Get the snapshot data { String } from the localstorage into view
  alt.bootstrap(getHours);
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
