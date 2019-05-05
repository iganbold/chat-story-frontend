import React from "react";
import ReactDOM from "react-dom";
import EpisodeListItem from "./EpisodeListItem";
import { actors, episode } from "../../../tools/mockData";

it("EpisodeListItem renders without crashing", () => {
  const customDialog = { actor: actors["0001"], ...episode.dialogs[0] };
  const div = document.createElement("div");
  ReactDOM.render(<EpisodeListItem dialog={customDialog} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
