import React from "react";
import EpisodeListItem from "../EpisodeListItem";
import { Box } from "grommet";

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

  getCustomTheme = (dialog, index) => {
    const customTheme = {
      ...this.props.style[dialog.actorID],
      hideActorAvatar:
        dialog.payload && dialog.payload.hideActorAvatar
          ? dialog.payload.hideActorAvatar
          : false,
      hideActorName: this.isPreviousActorSame(dialog.actorID, index)
    };

    return customTheme;
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
        {this.props.dialogs.map((dialog, index) => {
          return (
            <EpisodeListItem
              key={index}
              dialog={this.getCustomDialog(dialog)}
              customTheme={this.getCustomTheme(dialog, index)}
            />
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
