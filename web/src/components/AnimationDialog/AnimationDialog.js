import styled from "styled-components";
import ExpandKeyFrames from "../keyframes/expand";

const AnimationDialog = styled.div`
  transform-origin: ${props => props.customTheme.transformX} 100%;
  animation: 0.3s ${ExpandKeyFrames} forwards ease;
`;

export default AnimationDialog;
