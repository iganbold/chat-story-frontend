import React from "react";
import styled, { css } from "styled-components";
import AnimationDialog from "../AnimationDialog";

const style = ({ theme }) => css`
  display: inline-block;
  position: relative;
  background: ${theme.bubble.background};
  border-radius: ${theme.bubble.radius};
  color: ${theme.bubble.color};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  max-width: 60%;
  height: auto;
  margin: 0px 2.5px;
`;

// BubbuleBase inherits from AnimaitonDialog
const BubbleBase = styled(AnimationDialog)([style]);

const Bubble = props => <BubbleBase {...props}>{props.children}</BubbleBase>;

export default Bubble;
