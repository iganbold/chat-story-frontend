import React from "react";
import styled from "styled-components";
import TextDialog from "../text-dialog/";
import ActorAvator from "../actor-avatar";
import ActorName from "../actor-name";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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

const EpisodeItem = props => {
  const { actor, dialog, style, hideActorName } = props;

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
      default:
        // TODO: need to return a default dialog
        return <TextDialog value=" " />;
    }
  };

  const renderActorAvatar = () => (
    <ActorAvator
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

export default EpisodeItem;
