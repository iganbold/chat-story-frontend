import React from "react";
import ReactDOM from "react-dom";
import ActorName from "./ActorName";

it("ActorName renders without crashing", () => {
  const incoming = true;
  const hideActorName = false;

  const theme = {
    display: hideActorName ? "hidden" : "visible",
    margin: {
      left: incoming ? "45px" : "0px",
      right: !incoming ? "45px" : "0px"
    }
  };

  const div = document.createElement("div");
  ReactDOM.render(<ActorName customTheme={theme} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
