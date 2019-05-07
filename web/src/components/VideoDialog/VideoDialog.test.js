import React from "react";
import ReactDOM from "react-dom";
import VideoDialog from "./";

it("VideoDialog renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VideoDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
