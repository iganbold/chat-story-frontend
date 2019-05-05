import React from "react";
import ReactDOM from "react-dom";
import TextDialog from "./TextDialog";
import { episode } from "../../../tools/mockData";

it("renders TextDialog without crashing", () => {
  const style = episode.style["0001"];
  const incoming = true;

  const theme = {
    animationDialog: {
      transformX: incoming ? "0%" : "100%"
    },
    bubble: {
      background: style.dialogBackgroundColor,
      color: style.dialogColor,
      radius: incoming ? "20px 20px 20px 5px" : "20px 20px 5px 20px"
    }
  };

  const div = document.createElement("div");
  ReactDOM.render(<TextDialog theme={theme} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
