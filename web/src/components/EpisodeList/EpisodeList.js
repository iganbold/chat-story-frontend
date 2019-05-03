import React from "react";
import EpisodeListItem from "../EpisodeListItem";
import styled from "styled-components";
import { Box } from "grommet";

const BottomSpace = styled.div`
  width: 100%;
  min-height: 200px;
`;

class EpisodeList extends React.Component {
  bottomDummyDiv = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleOnClick = () => {
    this.props.onNextDialog();
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

  render() {
    const { dialogs, style } = this.props;
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
        {dialogs.map((dialog, index) => {
          return (
            <EpisodeListItem
              hideActorAvatar={
                dialog.payload && dialog.payload.hideActorAvatar
                  ? dialog.payload.hideActorAvatar
                  : false
              }
              hideActorName={this.isPreviousActorSame(dialog.actorID, index)}
              key={index}
              dialog={dialog}
              actor={this.props.actors[dialog.actorID]}
              customTheme={style[dialog.actorID]}
            />
          );
        })}
        <BottomSpace ref={this.bottomDummyDiv} />
      </Box>
    );
  }
}

export default EpisodeList;
