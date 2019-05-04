import React, { Component } from "react";
import EpisodeList from "../../components/EpisodeList";
import { Box, Heading, ResponsiveContext, Meter, Keyboard } from "grommet";
import { EpisodeData } from "../../data/";

const EpisodeBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="center"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    {...props}
  />
);

const EpisodeFooter = props => (
  <Box
    tag="footer"
    direction="row"
    align="center"
    justify="center"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    {...props}
  />
);

class EpisodePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDialogs: [],
      nextDialogIndex: 0,
      showFooter: true
    };
  }

  handleNextDialog = () => {
    if (this.isStoryEnd()) {
      let previousDialogs = this.state.currentDialogs;

      // remove previous typing dialog indicator
      if (this.isPreviousDialogTypingDialog()) {
        previousDialogs = previousDialogs.slice(0, previousDialogs.length - 1);
      }

      const nextDialogs = this.getNextDialogs(previousDialogs);

      // hide previous dialog actor avatar if previous dialog actor is same as next dialog actor
      if (
        this.shouldHidePreviousDialogAvatar(nextDialogs, nextDialogs.length - 1)
      ) {
        nextDialogs[nextDialogs.length - 2].payload.hideActorAvatar = true;
      }

      this.setState({
        currentDialogs: nextDialogs,
        nextDialogIndex: this.state.nextDialogIndex + 1
      });
    }

    if (this.state.showFooter) {
      this.setState({
        showFooter: !this.state.showFooter
      });
    }
  };

  isStoryEnd = () => {
    return this.state.nextDialogIndex !== EpisodeData.dialogs.length
      ? true
      : false;
  };

  isPreviousDialogTypingDialog = () => {
    const currentDialogs = this.state.currentDialogs;

    return currentDialogs.length > 0 &&
      currentDialogs[currentDialogs.length - 1].type === "TYPING_DIALOG"
      ? true
      : false;
  };

  shouldHidePreviousDialogAvatar = (dialogs, lastIndex) => {
    if (lastIndex !== 0) {
      return dialogs[lastIndex - 1].actorID === dialogs[lastIndex].actorID
        ? true
        : false;
    }
    return false;
  };

  getNextDialogs = currentDialogs => [
    ...currentDialogs,
    EpisodeData.dialogs[this.state.nextDialogIndex]
  ];

  getReadingPercentage = () => {
    return (this.state.nextDialogIndex / EpisodeData.dialogs.length) * 100;
  };

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Keyboard target="document" onEnter={this.handleNextDialog}>
            <Box fill>
              <EpisodeBar>
                <Heading level="3" margin="none">
                  Episode 1
                </Heading>
              </EpisodeBar>
              <Box pad="none">
                <Meter
                  size="full"
                  thickness={size !== "small" ? "xsmall" : "4px"}
                  values={[
                    { color: "dark-2", value: this.getReadingPercentage() }
                  ]}
                  aria-label="meter"
                />
              </Box>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                {size !== "small" && (
                  <Box
                    width="medium"
                    background="light-2"
                    align="center"
                    justify="center"
                  />
                )}
                <Box flex width="medium">
                  <EpisodeList
                    actors={EpisodeData.actors}
                    onNextDialog={this.handleNextDialog}
                    dialogs={this.state.currentDialogs}
                    style={EpisodeData.style}
                  />
                </Box>
                {size !== "small" && (
                  <Box
                    width="medium"
                    background="light-2"
                    align="center"
                    justify="center"
                  />
                )}
              </Box>

              {this.state.showFooter && (
                <EpisodeFooter onClick={this.handleNextDialog}>
                  <Heading color="dark-4" level="3">
                    TAP ANYWHERE TO CONTINUE
                  </Heading>
                </EpisodeFooter>
              )}
            </Box>
          </Keyboard>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default EpisodePage;
