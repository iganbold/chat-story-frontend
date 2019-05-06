import React from "react";
import ReactDOM from "react-dom";
import ImageDialog from "./";

it("ImageDialog renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImageDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
