import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EpisodePage from "./EpisodePage";
import ErrorPage from "./error-page";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* TODO: need to add home page for path="/" */}
        <Route exact path="/" component={EpisodePage} />
        <Route
          path="/stories/:storyID/episodes/:episodeID"
          component={EpisodePage}
        />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
