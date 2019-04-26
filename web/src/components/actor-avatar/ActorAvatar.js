import React from "react";
import styled from "styled-components";

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${props => props.themeBackgroundColor};
  color: #585858;
  font-size: 13px;
  font-weight: bold;
  width: 25px;
  min-width: 25px;
  height: 25px;
  margin-left: ${props =>
    props.themeDialogDirection === "incoming" ? "5px" : "2.5px"};
  margin-right: ${props =>
    props.themeDialogDirection !== "incoming" ? "5px" : "2.5px"};
`;

const ActorAvatar = props => {
  return (
    <Avatar
      themeBackgroundColor={props.themeBackgroundColor}
      themeDialogDirection={props.themeDialogDirection}
    >
      {props.value}
    </Avatar>
  );
};

export default ActorAvatar;
