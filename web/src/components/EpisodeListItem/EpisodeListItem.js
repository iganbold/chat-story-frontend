import React from "react";
import styled from "styled-components";
import TextDialog from "../TextDialog/";
import TypingDialog from "../TypingDialog/";
import ActorAvatar from "../ActorAvatar";
import ActorName from "../ActorName";

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.dialogDirection === "incoming" ? "row" : "row-reverse"};
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.dialogDirection === "incoming" ? "row" : "row-reverse"};
  align-items: flex-end;
  margin-top: 5px;
`;

const EpisodeListItem = props => {
  const { actor, dialog, customTheme, hideActorAvatar, hideActorName } = props;
  const theme = {
    direction: customTheme.dialogDirection,
    color: customTheme.dialogColor,
    background: customTheme.dialogBackgroundColor
  };

  const renderDialog = () => {
    switch (dialog.type) {
      case "TEXT_DIALOG":
        return <TextDialog label={dialog.payload.value} customTheme={theme} />;
      case "TYPING_DIALOG":
        return <TypingDialog customTheme={theme} />;
      default:
        // TODO: need to return a default dialog
        return <TextDialog value=" " />;
    }
  };

  const renderActorAvatar = () => (
    <ActorAvatar
      hide={hideActorAvatar}
      customTheme={{
        background: customTheme.avatarBackgroundColor,
        direction: customTheme.dialogDirection
      }}
      label={actor.initial}
    />
  );

  const renderActorName = () => (
    <ActorName
      hide={hideActorName}
      label={actor.name}
      themeDialogDirection={customTheme.dialogDirection}
    />
  );

  return (
    <Item>
      <TopRow dialogDirection={customTheme.dialogDirection}>
        {renderActorName()}
      </TopRow>
      <BottomRow dialogDirection={customTheme.dialogDirection}>
        {renderActorAvatar()}
        {renderDialog()}
      </BottomRow>
    </Item>
  );
};

export default EpisodeListItem;
