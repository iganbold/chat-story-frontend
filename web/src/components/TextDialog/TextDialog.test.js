import React from "react";
import ReactDOM from "react-dom";
import TextDialog from "./TextDialog";
import { episode } from "../../../tools/mockData";

it("renders TextDialog without crashing", () => {
  const style = episode.style["0001"];
  const incoming = true;
  const theme = {
    transformX: incoming ? "0%" : "100%",
    radius: incoming ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
    background: style.dialogBackgroundColor,
    color: style.dialogColor
  };

  const div = document.createElement("div");
  ReactDOM.render(<TextDialog customTheme={theme} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
