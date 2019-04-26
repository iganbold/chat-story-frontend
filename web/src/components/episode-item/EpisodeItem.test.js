import React from "react";
import ReactDOM from "react-dom";
import EpisodeItem from "./EpisodeItem";

it("EpisodeItem renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EpisodeItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
