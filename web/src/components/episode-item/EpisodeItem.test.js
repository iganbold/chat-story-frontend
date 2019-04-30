import React from "react";
import ReactDOM from "react-dom";
import EpisodeItem from "./EpisodeItem";
import { actors, episode } from "../../../tools/mockData";

it("EpisodeItem renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <EpisodeItem
      hideActorName={false}
      actor={actors[episode.dialogs[0].actorID]}
      dialog={episode.dialogs[0]}
      style={episode.style}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
