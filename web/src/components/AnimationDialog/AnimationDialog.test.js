import React from "react";
import ReactDOM from "react-dom";
import AnimationDialog from "./AnimationDialog";

it("AnimationDialog renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AnimationDialog
      customTheme={{
        transformX: "100%"
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
