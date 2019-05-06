import React from "react";
import ReactDOM from "react-dom";
import AnimatedEmoji from "./";

it("AnimatedEmoji renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AnimatedEmoji />, div);
  ReactDOM.unmountComponentAtNode(div);
});
