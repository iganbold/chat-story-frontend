import React from "react";
import EpisodeItem from "../episode-item";
import { Box } from "grommet";

const EpisodeList = ({ dialogs, style, onNextDialog }) => {
  return (
    <Box
      flex
      direction="column"
      overflow="auto"
      onClick={onNextDialog}
      pad={{
        top: "10px"
      }}
    >
      {dialogs.map((dialog, index) => (
        <EpisodeItem
          key={index}
          dialog={dialog}
          style={style[dialog.actorID]}
        />
      ))}
    </Box>
  );
};

export default EpisodeList;
