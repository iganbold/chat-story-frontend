import React from "react";
import styled from "styled-components";
import EpisodeItem from "../episode-item";

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const EpisodeList = props => {
  return (
    <List>
      {props.episode.dialogs.map((dialog, index) => (
        <EpisodeItem
          key={index}
          dialog={dialog}
          style={props.episode.style[dialog.actorID]}
        />
      ))}
    </List>
  );
};

export default EpisodeList;
