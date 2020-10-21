import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./bootstrap-theme.scss"; // bootstrap + variable overrides
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(<App />, document.getElementById("root"));
