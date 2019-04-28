import React, { Component } from "react";
import EpisodeList from "../episode-list";
import { Box, Heading, ResponsiveContext, Meter, Keyboard } from "grommet";

const mockEpisode = {
  episodeName: "Episode 1",
  style: {
    "0001": {
      actorInitial: "J",
      dialogDirection: "incoming",
      dialogBackgroundColor: "#FD6FFF",
      dialogColor: "white",
      avatarBackgroundColor: "#dfdfdf"
    },
    "0002": {
      actorInitial: "K",
      dialogDirection: "outgoing",
      dialogBackgroundColor: "#9c88ff",
      dialogColor: "white",
      avatarBackgroundColor: "#dfdfdf"
    }
  },
  dialogs: [
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Tik Tok"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Hello"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "hi"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "How are you?"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "I am good. How are you? What time are you coming?"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "I will be there at 6pm."
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "👍 See you soon"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Hello"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "hi"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "How are you?"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "I am good. How are you? What time are you coming?"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "I will be there at 6pm."
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "👍 See you soon"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "How are you?"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "I am good. How are you? What time are you coming?"
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "I will be there at 6pm."
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "👍 See you soon"
      }
    }
  ]
};

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
      currentDialogIndex: 0,
      showFooter: true
    };
  }

  handleNextDialog = () => {
    if (this.state.currentDialogIndex !== mockEpisode.dialogs.length) {
      const tempDialogs = this.state.currentDialogs.concat([
        mockEpisode.dialogs[this.state.currentDialogIndex]
      ]);

      const tempIndex = this.state.currentDialogIndex + 1;
      this.setState({
        currentDialogs: tempDialogs,
        currentDialogIndex: tempIndex
      });
    }

    if (this.state.showFooter) {
      this.setState({
        showFooter: !this.state.showFooter
      });
    }
  };

  getReadingPercentage = () => {
    return (this.state.currentDialogIndex / mockEpisode.dialogs.length) * 100;
  };

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Keyboard target="document" onSpace={this.handleNextDialog}>
            <Box fill>
              <EpisodeBar>
                <Heading level="3" margin="none">
                  Episode 1
                </Heading>
              </EpisodeBar>
              <Box pad="none">
                <Meter
                  size="full"
                  thickness="xsmall"
                  values={[{ value: this.getReadingPercentage() }]}
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
                    onNextDialog={this.handleNextDialog}
                    dialogs={this.state.currentDialogs}
                    style={mockEpisode.style}
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