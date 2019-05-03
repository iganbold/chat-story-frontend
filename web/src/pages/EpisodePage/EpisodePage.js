import React, { Component } from "react";
import EpisodeList from "../../components/episode-list";
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
      actorID: "0002",
      payload: {
        value: "Send and Receive Free Text Messages from your PC for FREE."
      }
    },
    {
      type: "TEXT_DIALOG",
      actorID: "0002",
      payload: {
        value: "beyond alphanumeric text to include multimedia messages"
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
    return this.state.nextDialogIndex !== mockEpisode.dialogs.length
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
