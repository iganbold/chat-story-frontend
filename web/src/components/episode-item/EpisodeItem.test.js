import React from "react";
import ReactDOM from "react-dom";
import EpisodeItem from "./EpisodeItem";
import mockData from "../../../tools/mockData";

it("EpisodeItem renders without crashing", () => {
  const episode = mockData.story.episodes[0];
  const div = document.createElement("div");

  ReactDOM.render(
    <EpisodeItem dialog={episode.dialogs[0]} style={episode.style} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
