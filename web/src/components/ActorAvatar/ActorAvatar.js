import React from "react";
import styled, { css } from "styled-components";
import BouncyKeyFrames from "../keyframes/bouncy";

const style = ({ theme }) => css`
  display: flex;
  visibility: ${theme.actorAvatar.visibility};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${theme.actorAvatar.background};
  color: #585858;
  font-size: 13px;
  font-weight: bold;
  width: 25px;
  min-width: 25px;
  height: 25px;
  margin-left: ${theme.actorAvatar.margin.left};
  margin-right: ${theme.actorAvatar.margin.right};
  transform-origin: 50% 100%;
  animation: 0.3s ${BouncyKeyFrames} forwards ease;
`;
const AvatarBase = styled.div([style]);

AvatarBase.defaultProps = {
  theme: {
    actorAvatar: {
      visibility: "visible",
      background: "grey",
      margin: {
        left: "0px",
        right: "0px"
      }
    }
  }
};

const ActorAvatar = props => <AvatarBase {...props}>{props.label}</AvatarBase>;

export default ActorAvatar;
