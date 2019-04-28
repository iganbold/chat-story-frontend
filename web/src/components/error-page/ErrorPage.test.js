import React from "react";
import ReactDOM from "react-dom";
import ErrorPage from "./ErrorPage";

it("ErrorPage renders without crashing", () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  const div = document.createElement("div");
  ReactDOM.render(<ErrorPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
