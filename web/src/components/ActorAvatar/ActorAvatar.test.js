import React from "react";
import ReactDOM from "react-dom";
import ActorAvater from "./ActorAvatar";

it("ActorAvater renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<ActorAvater />, div);
  ReactDOM.unmountComponentAtNode(div);
});
