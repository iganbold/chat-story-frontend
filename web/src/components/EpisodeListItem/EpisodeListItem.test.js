import React from "react";
import ReactDOM from "react-dom";
import EpisodeListItem from "./EpisodeListItem";
import { actors, episode } from "../../../tools/mockData";

it("EpisodeListItem renders without crashing", () => {
  const customDialog = { actor: actors["0001"], ...episode.dialogs[0] };
  const customTheme = {
    ...episode.style["0001"],
    hideActorAvatar: false,
    hideActorName: false
  };
  const div = document.createElement("div");

  ReactDOM.render(
    <EpisodeListItem dialog={customDialog} customTheme={customTheme} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
