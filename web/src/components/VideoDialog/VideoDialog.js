import React from "react";
import styled, { css } from "styled-components";
import { style as AnimatedDialogStyle } from "../AnimationDialog";

const youtubeStyle = css`
  margin: 0px 2.5px;
  background: #ededed;
  ${AnimatedDialogStyle}
`;

const videoStyle = ({ theme }) => css`
  border-radius: ${theme.bubble.radius};
  ${youtubeStyle}
`;

const VideoContainer = styled.video([videoStyle]);
const YoutubeVideoContainer = styled.iframe([youtubeStyle]);

const animationDialog = {
  animationDialog: {
    transformX: "0%"
  }
};

VideoContainer.defaultProps = {
  theme: {
    ...animationDialog,
    bubble: {
      radius: "20px 20px 20px 5px"
    }
  }
};

YoutubeVideoContainer.defaultProps = {
  theme: {
    ...animationDialog
  }
};

const VideoDialog = ({ url = "" }) => {
  if (url.includes("www.youtube.com")) {
    return (
      <YoutubeVideoContainer
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      />
    );
  } else {
    return (
      <VideoContainer width="55%" controls>
        <source src={url} type="video/mp4" />
      </VideoContainer>
    );
  }
};

export default VideoDialog;
