import React from "react";
import ReactDOM from "react-dom";
import Bubble from "./";
import { episode } from "../../../tools/mockData";

it("Bubble renders without crashing", () => {
  const style = episode.style["0001"];
  const incoming = style.dialogDirection === "incoming" ? true : false;
  const theme = {
    background: style.dialogBackgroundColor,
    color: style.dialogColor,
    radius: incoming ? "20px 20px 20px 5px" : "20px 20px 5px 20px"
  };

  const div = document.createElement("div");
  ReactDOM.render(<Bubble customTheme={theme} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
