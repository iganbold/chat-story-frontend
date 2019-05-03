import React from "react";
import styled from "styled-components";
import TextDialog from "../TextDialog/";
import TypingDialog from "../TextDialog/";
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
  const { actor, dialog, style, hideActorAvatar, hideActorName } = props;

  const renderDialog = () => {
    switch (dialog.type) {
      case "TEXT_DIALOG":
        return (
          <TextDialog
            value={dialog.payload.value}
            themeDialogDirection={style.dialogDirection}
            themeTextColor={style.dialogColor}
            themeBackgroundColor={style.dialogBackgroundColor}
          />
        );
      case "TYPING_DIALOG":
        return (
          <TypingDialog
            themeDialogDirection={style.dialogDirection}
            themeTextColor={style.dialogColor}
            themeBackgroundColor={style.dialogBackgroundColor}
          />
        );
      default:
        // TODO: need to return a default dialog
        return <TextDialog value=" " />;
    }
  };

  const renderActorAvatar = () => (
    <ActorAvatar
      hide={hideActorAvatar}
      themeBackgroundColor={style.avatarBackgroundColor}
      themeDialogDirection={style.dialogDirection}
      value={actor.initial}
    />
  );

  const renderActorName = () => (
    <ActorName
      hide={hideActorName}
      themeDialogDirection={style.dialogDirection}
      value={actor.name}
    />
  );

  return (
    <Item>
      <TopRow dialogDirection={style.dialogDirection}>
        {renderActorName()}
      </TopRow>
      <BottomRow dialogDirection={style.dialogDirection}>
        {renderActorAvatar()}
        {renderDialog()}
      </BottomRow>
    </Item>
  );
};

export default EpisodeListItem;
