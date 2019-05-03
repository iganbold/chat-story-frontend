import React from "react";
import ReactDOM from "react-dom";
import ActorAvater from "./ActorAvatar";

it("ActorAvater renders without crashing", () => {
  const incoming = true;
  const hideActorAvatar = false;
  const avatarBackgroundColor = "grey";
  const theme = {
    visibility: hideActorAvatar ? "hidden" : "visible",
    background: avatarBackgroundColor,
    margin: {
      left: incoming ? "5px" : "2.5px",
      right: !incoming ? "5px" : "2.5px"
    }
  };

  const div = document.createElement("div");
  ReactDOM.render(<ActorAvater customTheme={theme} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
