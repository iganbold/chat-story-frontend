import React from "react";
import styled from "styled-components";

const Bubble = styled.div`
  display: inline-block;
  position: relative;
  background: ${props => props.themeBackgroundColor};
  border-radius: ${props =>
    props.themeDialogDirection === "incoming"
      ? "20px 20px 20px 5px"
      : "20px 20px 5px 20px"};
  color: ${props => props.themeTextColor};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  max-width: 60%;
  height: auto;
  margin: 0px 2.5px;
`;

const TextDialog = props => {
  return (
    <Bubble
      themeDialogDirection={props.themeDialogDirection}
      themeTextColor={props.themeTextColor}
      themeBackgroundColor={props.themeBackgroundColor}
    >
      {props.value}
    </Bubble>
  );
};

export default TextDialog;
