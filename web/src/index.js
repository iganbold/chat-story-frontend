import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { Grommet } from "grommet";

const theme = {
  colors: {
    brand: "#228BE6"
  },
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

ReactDOM.render(
  <Grommet theme={theme} full>
    <App />
  </Grommet>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
