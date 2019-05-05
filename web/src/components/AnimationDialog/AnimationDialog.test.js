import React from "react";
import ReactDOM from "react-dom";
import AnimationDialog from "./AnimationDialog";

it("AnimationDialog renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AnimationDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
