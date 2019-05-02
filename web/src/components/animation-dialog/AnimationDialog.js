import styled from "styled-components";
import ExpandKeyFrames from "../keyframes/expand";

const AnimationDialog = styled.div`
  transform-origin: ${props =>
      props.themeDialogDirection === "incoming" ? "0%" : "100%"}
    100%;
  animation: 0.3s ${ExpandKeyFrames} forwards ease;
`;

export default AnimationDialog;
