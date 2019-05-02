import { keyframes } from "styled-components";
const BouncyKeyFrames = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
`;

export default BouncyKeyFrames;
