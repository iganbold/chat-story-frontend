import React, { Component } from "react";
import EpisodeList from "../../components/EpisodeList";
import {
  Box,
  Heading,
  ResponsiveContext,
  Meter,
  Keyboard,
  Button,
  Layer,
  RangeInput,
  Text,
  CheckBox
} from "grommet";
import { Edit, Catalog, Close } from "grommet-icons";
import { EpisodeData } from "../../data/";

const EpisodeBar = props => (
  <Box
    as="header"
    direction="row"
    align="center"
    justify="between"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    {...props}
  />
);

const EpisodeFooter = props => (
  <Box
    as="footer"
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
      showFooter: true,
      themeDarkMode: false,
      showSettings: false,
      readingAutoMode: false,
      readingAutoModeSpeed: 0.4,
      fontSize: 0.4,
      showAnimatedEmoji: false,
      emoji: ""
    };
  }

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

  hasNextDialogAnimatedEmoji = nextDialog =>
    nextDialog.payload && nextDialog.payload.animatedEmoji;

  shouldHidePreviousDialogAvatar = (dialogs, lastIndex) => {
    if (lastIndex !== 0) {
      return dialogs[lastIndex - 1].actorID === dialogs[lastIndex].actorID
        ? true
        : false;
    }
    return false;
  };

  getNextDialogs = (currentDialogs, nextDialog) => [
    ...currentDialogs,
    nextDialog
  ];

  getReadingPercentage = () => {
    return (this.state.nextDialogIndex / EpisodeData.dialogs.length) * 100;
  };

  handleOnThemeChange = e => this.setState({ themeDarkMode: e.target.checked });

  handleCloseSettings = () => this.setState({ showSettings: false });

  handleOnReadingModeChange = e =>
    this.setState({ readingAutoMode: e.target.checked });

  handleAutoModeOnChange = e => {
    this.setState({ readingAutoModeSpeed: e.target.value });
  };

  handleFontSizeOnChange = e => {
    this.setState({ fontSize: e.target.value });
  };

  handleNextDialogAnimatedEmoji = (nextState, nextDialog) => {
    this.setState({ showAnimatedEmoji: false });
    nextState.emoji = nextDialog.payload.animatedEmoji;
    nextState.showAnimatedEmoji = true;
  };

  handleNextDialog = () => {
    let nextState = {};

    if (this.isStoryEnd()) {
      let previousDialogs = this.state.currentDialogs;
      const nextDialog = EpisodeData.dialogs[this.state.nextDialogIndex];

      // remove previous typing dialog indicator
      if (this.isPreviousDialogTypingDialog()) {
        previousDialogs = previousDialogs.slice(0, previousDialogs.length - 1);
      }

      const nextDialogs = [...previousDialogs, nextDialog];

      // hide previous dialog actor avatar if previous dialog actor is same as next dialog actor
      if (
        this.shouldHidePreviousDialogAvatar(nextDialogs, nextDialogs.length - 1)
      ) {
        nextDialogs[nextDialogs.length - 2].payload.hideActorAvatar = true;
      }

      this.hasNextDialogAnimatedEmoji(nextDialog) &&
        this.handleNextDialogAnimatedEmoji(nextState, nextDialog);

      nextState.currentDialogs = nextDialogs;
      nextState.nextDialogIndex = this.state.nextDialogIndex + 1;
    }

    if (this.state.showFooter) {
      nextState.showFooter = !this.state.showFooter;
    }

    this.setState(nextState);
  };

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Keyboard target="document" onEnter={this.handleNextDialog}>
            <Box fill>
              <EpisodeBar>
                <Button icon={<Catalog />} />
                <Heading level="3" margin="none">
                  Episode 1
                </Heading>
                <Button
                  icon={<Edit />}
                  onClick={() => this.setState({ showSettings: true })}
                />
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
                    showAnimatedEmoji={this.state.showAnimatedEmoji}
                    emoji={this.state.emoji}
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
            {this.state.showSettings && (
              <Layer
                position="right"
                full="vertical"
                modal
                onEsc={this.handleCloseSettings}
                onClickOutside={this.handleCloseSettings}
              >
                <Box
                  width="medium"
                  fill="vertical"
                  overflow="auto"
                  pad="medium"
                >
                  <Box flex={false} direction="row" justify="between">
                    <Heading level={2} margin="none">
                      Settings
                    </Heading>
                    <Button
                      icon={<Close />}
                      onClick={this.handleCloseSettings}
                    />
                  </Box>
                  <Box flex={false} direction="column">
                    <Heading level={4}>Theme</Heading>
                    <Box direction="row" justify="between">
                      <Text>Dark</Text>
                      <CheckBox
                        toggle
                        checked={this.state.themeDarkMode}
                        onChange={this.handleOnThemeChange}
                      />
                    </Box>
                  </Box>
                  <Box flex={false} direction="column">
                    <Heading level={4}>Reading Mode</Heading>
                    <Box direction="row" justify="between">
                      <Text>Autoplay</Text>
                      <CheckBox
                        toggle
                        checked={this.state.readingAutoMode}
                        onChange={this.handleOnReadingModeChange}
                      />
                    </Box>
                    {this.state.readingAutoMode && (
                      <Box
                        direction="row"
                        align="center"
                        pad="medium"
                        gap="small"
                      >
                        <Text>Slow</Text>
                        <Box align="center" width="small">
                          <RangeInput
                            min={0}
                            max={1}
                            step={0.1}
                            value={this.state.readingAutoModeSpeed}
                            onChange={this.handleAutoModeOnChange}
                          />
                        </Box>
                        <Text>Fast</Text>
                      </Box>
                    )}
                  </Box>
                  <Box flex={false} direction="column">
                    <Heading level={4}>Font Size</Heading>
                    <Box
                      direction="row"
                      align="center"
                      pad="medium"
                      gap="small"
                    >
                      <Text>Small</Text>
                      <Box align="center" width="small">
                        <RangeInput
                          min={0}
                          max={1}
                          step={0.1}
                          value={this.state.fontSize}
                          onChange={this.handleFontSizeOnChange}
                        />
                      </Box>
                      <Text>Big</Text>
                    </Box>
                  </Box>
                </Box>
              </Layer>
            )}
          </Keyboard>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default EpisodePage;
