import React from "react";
import styled, { keyframes } from "styled-components";
import Bubble from "../Bubble";

const BlinkKeyFrames = keyframes`
  50% {
    opacity: 1;
  }
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
    <Bubble {...props}>
      <Dot />
      <Dot />
      <Dot />
    </Bubble>
  );
};

export default TypingDialog;
