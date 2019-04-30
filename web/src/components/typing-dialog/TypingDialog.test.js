import React from "react";
import ReactDOM from "react-dom";
import TypingDialog from "./TypingDialog";

it("TypingDialog renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TypingDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
