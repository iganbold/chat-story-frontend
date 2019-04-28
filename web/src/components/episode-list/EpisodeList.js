import React from "react";
import EpisodeItem from "../episode-item";
import { Box } from "grommet";

const EpisodeList = ({ dialogs, style, addNextDialog }) => {
  return (
    <Box height="100%" direction="column" onClick={addNextDialog}>
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
