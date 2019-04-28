import React from "react";
import { Route, Switch } from "react-router-dom";
import EpisodePage from "./episode-page";

function App() {
  return (
    <React.Fragment>
      <Switch>
        {/* TODO: need to add home page for path="/" */}
        <Route exact path="/" component={EpisodePage} />
        <Route
          path="/stories/:storyID/episodes/:episodeID"
          component={EpisodePage}
        />
      </Switch>
    </React.Fragment>
  );
}

export default App;
