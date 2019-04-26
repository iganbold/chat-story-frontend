import React from "react";
import styled from "styled-components";
import TextDialog from "../text-dialog/";
import ActorAvator from "../actor-avatar";

const Item = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.dialogDirection === "incoming" ? "row" : "row-reverse"};
  align-items: flex-end;
  margin: 10px 0px 0px;
`;

const EpisodeItem = props => {
  const { dialog, style } = props;

  const renderDialog = (dialog, style) => {
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
        // TODO: need to return default dialog
        return <TextDialog value=" " />;
    }
  };

  const renderAvatar = style => (
    <ActorAvator
      themeBackgroundColor={style.avatarBackgroundColor}
      themeDialogDirection={style.dialogDirection}
      value={style.actorInitial}
    />
  );

  return (
    <Item dialogDirection={style.dialogDirection}>
      {renderAvatar(style)}
      {renderDialog(dialog, style)}
    </Item>
  );
};

export default EpisodeItem;
