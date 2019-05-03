import React from "react";
import ReactDOM from "react-dom";
import TextDialog from "./TextDialog";

it("renders TextDialog without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TextDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
