import { keyframes } from "styled-components";
const ExpandKeyFrames = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

export default ExpandKeyFrames;
