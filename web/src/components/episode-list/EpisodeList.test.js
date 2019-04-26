import React from "react";
import ReactDOM from "react-dom";
import EpisodeList from "./EpisodeList";
import { episode } from "../../../tools/mockData";

it("EpisodeList renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EpisodeList episode={episode} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
