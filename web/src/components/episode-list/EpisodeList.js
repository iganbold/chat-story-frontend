import React from "react";
import EpisodeItem from "../episode-item";
import styled from "styled-components";
import { Box } from "grommet";

const Space = styled.div`
  width: 100%;
  min-height: 200px;
  background: blue;
`;

const EpisodeList = ({ dialogs, style, onNextDialog }) => {
  return (
    <Box
      flex
      direction="column"
      overflow="auto"
      onClick={onNextDialog}
      background="white"
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
      <Space />
    </Box>
  );
};

export default EpisodeList;
