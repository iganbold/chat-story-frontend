import React from "react";
import styled from "styled-components";
import AnimationDialog from "../AnimationDialog";

const Bubble = styled(AnimationDialog)`
  display: inline-block;
  position: relative;
  background: ${props => props.customTheme.background};
  border-radius: ${props =>
    props.customTheme.direction === "incoming"
      ? "20px 20px 20px 5px"
      : "20px 20px 5px 20px"};
  color: ${props => props.customTheme.color};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  max-width: 60%;
  height: auto;
  margin: 0px 2.5px;
`;

const TextDialog = props => <Bubble {...props}>{props.label}</Bubble>;

export default TextDialog;
