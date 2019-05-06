import React from "react";
import { Box, Image } from "grommet";
import styled, { css } from "styled-components";
import { style as AnimatedDialogStyle } from "../AnimationDialog";

const dummyImage = "https://dummyimage.com/600x400/6fffb0/333333.png&text=Bla";

const style = ({ theme }) => css`
  border-radius: ${theme.bubble.radius};
  margin: 0px 2.5px;
  ${AnimatedDialogStyle}
`;

const StyledImage = styled(Image)([style]);

StyledImage.defaultProps = {
  fallback: dummyImage,
  theme: {
    animationDialog: {
      transformX: "0%"
    },
    bubble: {
      radius: "20px 20px 20px 5px"
    }
  }
};

const ImageDialog = ({ url }) => {
  return (
    <Box height="small" width="small">
      <StyledImage fit="cover" src={url} />
    </Box>
  );
};

export default ImageDialog;
