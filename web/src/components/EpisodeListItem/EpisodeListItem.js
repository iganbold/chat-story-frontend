import React from "react";
import { Box } from "grommet";
import TextDialog from "../TextDialog/";
import TypingDialog from "../TypingDialog/";
import ActorAvatar from "../ActorAvatar";
import ActorName from "../ActorName";

const EpisodeListItem = props => {
  const { dialog } = props;

  const renderActorName = () => <ActorName label={dialog.actor.name} />;

  const renderActorAvatar = () => <ActorAvatar label={dialog.actor.initial} />;

  const renderDialog = () => {
    switch (dialog.type) {
      case "TEXT_DIALOG":
        return <TextDialog label={dialog.payload.value} />;
      case "TYPING_DIALOG":
        return <TypingDialog />;
      default:
        // TODO: need to return a default dialog
        return <TextDialog value=" " />;
    }
  };

  return (
    <Box flex={false} direction="column">
      <Box direction={props.direction}>{renderActorName()}</Box>
      <Box direction={props.direction} align="end" margin={{ top: "5px" }}>
        {renderActorAvatar()}
        {renderDialog()}
      </Box>
    </Box>
  );
};

export default EpisodeListItem;
