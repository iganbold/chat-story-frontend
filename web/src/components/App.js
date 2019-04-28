import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EpisodePage from "./episode-page";

function App() {
  return (
    <Router>
      <Switch>
        {/* TODO: need to add home page for path="/" */}
        <Route exact path="/" component={EpisodePage} />
        <Route
          path="/stories/:storyID/episodes/:episodeID"
          component={EpisodePage}
        />
      </Switch>
    </Router>
  );
}

export default App;
