import React from "react";
import ReactDOM from "react-dom";
import ActorName from "./ActorName";

it("ActorName renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ActorName />, div);
  ReactDOM.unmountComponentAtNode(div);
});
