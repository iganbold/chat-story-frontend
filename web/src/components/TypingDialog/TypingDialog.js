import React from "react";
import styled, { keyframes } from "styled-components";
import AnimationDialog from "../AnimationDialog";

const BlinkKeyFrames = keyframes`
  50% {
    opacity: 1;
  }
`;

const Typing = styled(AnimationDialog)`
  background: ${props => props.customTheme.background};
  border-radius: ${props =>
    props.customTheme.direction === "incoming"
      ? "20px 20px 20px 5px"
      : "20px 20px 5px 20px"};
  color: ${props => props.customTheme.color};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  height: auto;
  margin: 0px 2.5px;
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
    <Typing {...props}>
      <Dot />
      <Dot />
      <Dot />
    </Typing>
  );
};

export default TypingDialog;
