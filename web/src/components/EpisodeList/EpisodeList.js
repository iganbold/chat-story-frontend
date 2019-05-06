import React from "react";
import { Box } from "grommet";
import { ThemeProvider } from "styled-components";
import EpisodeListItem from "../EpisodeListItem";
import AnimatedEmoji from "../AnimatedEmoji";

class EpisodeList extends React.Component {
  bottomDummyDiv = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {}

  handleOnClick = () => {
    this.props.onNextDialog();
    this.scrollToBottom();
  };

  scrollToBottom = () => {
    this.bottomDummyDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  isPreviousActorSame = (actorID, index) => {
    if (index !== 0) {
      return this.props.dialogs[index - 1].actorID === actorID ? true : false;
    }

    return false;
  };

  getCustomTheme = (dialog, index, incoming) => {
    const actorStyle = this.props.style[dialog.actorID];
    const hideActorAvatar =
      dialog.payload && dialog.payload.hideActorAvatar
        ? dialog.payload.hideActorAvatar
        : false;

    const theme = {
      animationDialog: {
        transformX: incoming ? "0%" : "100%"
      },

      bubble: {
        radius: incoming ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
        color: actorStyle.bubbleTextColor,
        background: actorStyle.bubbleBackgroundColor
      },

      actorAvatar: {
        visibility: hideActorAvatar ? "hidden" : "visible",
        background: actorStyle.avatarBackgroundColor,
        margin: {
          left: incoming ? "5px" : "2.5px",
          right: !incoming ? "5px" : "2.5px"
        }
      },

      actorName: {
        display: this.isPreviousActorSame(dialog.actorID, index)
          ? "none"
          : "block",
        margin: {
          left: incoming ? "45px" : "0px",
          right: !incoming ? "45px" : "0px"
        }
      }
    };

    return theme;
  };

  isDialogIncoming = dialog => {
    return this.props.style[dialog.actorID].dialogDirection === "incoming"
      ? true
      : false;
  };

  getCustomDialog = dialog => {
    const cutomDialog = {
      ...dialog,
      actor: this.props.actors[dialog.actorID]
    };

    return cutomDialog;
  };

  render() {
    return (
      <Box
        flex
        direction="column"
        overflow="auto"
        onClick={this.handleOnClick}
        background="white"
        pad={{
          top: "10px"
        }}
      >
        {/* TODO: Remove AnimatedEmoji componenent after it's emoji animations are completed*/}
        {this.props.showAnimatedEmoji && (
          <AnimatedEmoji emoji={this.props.emoji} />
        )}
        {this.props.dialogs.map((dialog, index) => {
          const incoming = this.isDialogIncoming(dialog);
          const customDialog = this.getCustomDialog(dialog);

          return (
            // FIXME: Need check theme provider b/c it seems I am creating many duplicate themes
            <ThemeProvider
              key={index}
              theme={this.getCustomTheme(dialog, index, incoming)}
            >
              <EpisodeListItem
                dialog={customDialog}
                direction={incoming ? "row" : "row-reverse"}
              />
            </ThemeProvider>
          );
        })}
        <Box
          flex={false}
          width="100%"
          height="200px"
          ref={this.bottomDummyDiv}
        />
      </Box>
    );
  }
}

export default EpisodeList;
