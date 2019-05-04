import React from "react";
import ReactDOM from "react-dom";
import TypingDialog from "./TypingDialog";
import { episode } from "../../../tools/mockData";

it("TypingDialog renders without crashing", () => {
  const style = episode.style["0001"];
  const incoming = true;
  const theme = {
    transformX: incoming ? "0%" : "100%",
    radius: incoming ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
    background: style.dialogBackgroundColor,
    color: style.dialogColor
  };

  const div = document.createElement("div");
  ReactDOM.render(<TypingDialog customTheme={theme} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
