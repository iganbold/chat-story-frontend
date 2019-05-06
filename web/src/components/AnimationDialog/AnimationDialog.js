import styled, { css } from "styled-components";
import ExpandKeyFrames from "../keyframes/expand";

export const style = ({ theme }) => css`
  transform-origin: ${theme.animationDialog.transformX} 100%;
  animation: 0.3s ${ExpandKeyFrames} forwards ease;
`;

const AnimationDialog = styled.div([style]);

AnimationDialog.defaultProps = {
  theme: {
    animationDialog: {
      transformX: "0%"
    }
  }
};

export default AnimationDialog;
