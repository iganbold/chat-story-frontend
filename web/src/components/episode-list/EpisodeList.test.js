import React from "react";
import ReactDOM from "react-dom";
import EpisodeList from "./EpisodeList";
import { actors, episode } from "../../../tools/mockData";

it("EpisodeList renders without crashing", () => {
  const div = document.createElement("div");
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  ReactDOM.render(
    <EpisodeList
      actors={actors}
      dialogs={episode.dialogs}
      style={episode.style}
      onNextDialog={jest.fn()}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
