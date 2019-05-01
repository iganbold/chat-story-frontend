import React from "react";
import styled, { keyframes } from "styled-components";

const BlinkKeyFrames = keyframes`
  50% {
    opacity: 1;
  }
`;
const PulgeKeyFrames = keyframes`
  50% {
    transform: scale(1.05);
  }
`;

const Typing = styled.div`
  background: ${props => props.themeBackgroundColor};
  border-radius: ${props =>
    props.themeDialogDirection === "incoming"
      ? "20px 20px 20px 5px"
      : "20px 20px 5px 20px"};
  color: ${props => props.themeTextColor};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  height: auto;
  margin: 0px 2.5px;
  animation: 2s ${PulgeKeyFrames} infinite ease-out;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin: 5px 1px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.4;
  float: left;

  &:nth-of-type(1) {
    animation: 1s ${BlinkKeyFrames} infinite 0.3333s;
  }

  &:nth-of-type(2) {
    animation: 1s ${BlinkKeyFrames} infinite 0.6666s;
  }

  &:nth-of-type(3) {
    animation: 1s ${BlinkKeyFrames} infinite 0.9999s;
  }
`;

const TypingDialog = props => {
  return (
    <Typing
      themeDialogDirection={props.themeDialogDirection}
      themeTextColor={props.themeTextColor}
      themeBackgroundColor={props.themeBackgroundColor}
    >
      <Dot />
      <Dot />
      <Dot />
    </Typing>
  );
};

export default TypingDialog;
