import styled, { css } from "styled-components";
import ExpandKeyFrames from "../keyframes/expand";

const style = ({ theme }) => css`
  transform-origin: ${theme.animationDialog.transformX} 100%;
  animation: 0.3s ${ExpandKeyFrames} forwards ease;
`;

const AnimationDialog = styled.div([style]);

export default AnimationDialog;
