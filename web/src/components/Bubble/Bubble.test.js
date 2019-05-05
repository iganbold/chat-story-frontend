import React from "react";
import ReactDOM from "react-dom";
import Bubble from "./";
import { theme } from "../../../tools/mockData";

it("Bubble renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Bubble theme={theme} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
