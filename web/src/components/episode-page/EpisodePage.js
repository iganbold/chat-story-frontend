import React, { Component } from "react";
import EpisodeList from "../episode-list";
import { Box, Heading, ResponsiveContext, Meter, Keyboard } from "grommet";

const mockEpisode = {
  episodeName: "Episode 1",
  style: {
    "0001": {
      dialogDirection: "incoming",
      dialogBackgroundColor: "#FD6FFF",
      dialogColor: "white",
      avatarBackgroundColor: "#dfdfdf"
    },
    "0002": {
      dialogDirection: "outgoing",
      dialogBackgroundColor: "#9c88ff",
      dialogColor: "white",
      avatarBackgroundColor: "#dfdfdf"
    }
  },
  actors: {
    "0001": { name: "Jack", initial: "J", about: "Jack yara yara about" },
    "0002": { name: "Kelly", initial: "K", about: "Kelly yara yara about" }
  },
  dialogs: [
    {
      type: "TYPING_DIALOG",
      actorID: "0001"
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Tik Tok"
      }
    },
    {
      type: "TYPING_DIALOG",
      actorID: "0001"
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0001",
      payload: {
        value: "Hello"
      }
    },
    {
      type: "TYPING_DIALOG",
      actorID: "0002"
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
      nextDialogIndex: 0,
      showFooter: true
    };
  }

  handleNextDialog = () => {
    if (this.isStoryEnd()) {
      let currentDialogs = this.state.currentDialogs;

      if (this.isPreviosDialogTypingDialog()) {
        // remove previous typing dialog indicator
        currentDialogs = currentDialogs.slice(0, currentDialogs.length - 1);
      }

      this.setState({
        currentDialogs: this.getNextDialogs(currentDialogs),
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
    return this.state.nextDialogIndex !== mockEpisode.dialogs.length
      ? true
      : false;
  };

  isPreviosDialogTypingDialog = () => {
    const currentDialogs = this.state.currentDialogs;

    return currentDialogs.length > 0 &&
      currentDialogs[currentDialogs.length - 1].type === "TYPING_DIALOG"
      ? true
      : false;
  };

  getNextDialogs = currentDialogs => {
    return currentDialogs.concat([
      mockEpisode.dialogs[this.state.nextDialogIndex]
    ]);
  };

  getReadingPercentage = () => {
    return (this.state.nextDialogIndex / mockEpisode.dialogs.length) * 100;
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
                    actors={mockEpisode.actors}
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
