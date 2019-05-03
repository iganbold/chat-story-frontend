import React from "react";
import { Box } from "grommet";
import TextDialog from "../TextDialog/";
import TypingDialog from "../TypingDialog/";
import ActorAvatar from "../ActorAvatar";
import ActorName from "../ActorName";

const EpisodeListItem = props => {
  const { dialog, customTheme } = props;
  const incoming = customTheme.dialogDirection === "incoming" ? true : false;

  const renderDialog = () => {
    const dialogTheme = {
      transformX: incoming ? "0%" : "100%",
      radius: incoming ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
      color: customTheme.dialogColor,
      background: customTheme.dialogBackgroundColor
    };

    switch (dialog.type) {
      case "TEXT_DIALOG":
        return (
          <TextDialog label={dialog.payload.value} customTheme={dialogTheme} />
        );
      case "TYPING_DIALOG":
        return <TypingDialog customTheme={dialogTheme} />;
      default:
        // TODO: need to return a default dialog
        return <TextDialog value=" " />;
    }
  };

  const renderActorAvatar = () => (
    <ActorAvatar
      customTheme={{
        visibility: customTheme.hideActorAvatar === true ? "hidden" : "visible",
        background: customTheme.avatarBackgroundColor,
        margin: {
          left: incoming ? "5px" : "2.5px",
          right: !incoming ? "5px" : "2.5px"
        }
      }}
      label={dialog.actor.initial}
    />
  );

  const renderActorName = () => (
    <ActorName
      label={dialog.actor.name}
      customTheme={{
        display: customTheme.hideActorName === true ? "none" : "block",
        margin: {
          left: incoming ? "45px" : "0px",
          right: !incoming ? "45px" : "0px"
        }
      }}
    />
  );

  return (
    <Box flex={false} direction="column">
      <Box direction={incoming ? "row" : "row-reverse"}>
        {renderActorName()}
      </Box>
      <Box
        direction={incoming ? "row" : "row-reverse"}
        align="end"
        margin={{ top: "5px" }}
      >
        {renderActorAvatar()}
        {renderDialog()}
      </Box>
    </Box>
  );
};

export default EpisodeListItem;
