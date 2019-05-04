import React from "react";
import styled from "styled-components";
import AnimationDialog from "../AnimationDialog";

const BaseBubble = styled(AnimationDialog)`
  display: inline-block;
  position: relative;
  background: ${props => props.customTheme.background};
  border-radius: ${props => props.customTheme.radius};
  color: ${props => props.customTheme.color};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  max-width: 60%;
  height: auto;
  margin: 0px 2.5px;
`;

const Bubble = props => <BaseBubble {...props}>{props.children}</BaseBubble>;

export default Bubble;
