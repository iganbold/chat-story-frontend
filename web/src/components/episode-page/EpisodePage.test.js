import React from "react";
import ReactDOM from "react-dom";
import EpisodePage from "./EpisodePage";

it("EpisodePage renders without crashing", () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  const div = document.createElement("div");
  ReactDOM.render(<EpisodePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
