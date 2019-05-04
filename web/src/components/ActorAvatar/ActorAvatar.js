import React from "react";
import styled from "styled-components";
import BouncyKeyFrames from "../keyframes/bouncy";

const Avatar = styled.div`
  display: flex;
  visibility: ${props => props.customTheme.visibility};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${props => props.customTheme.background};
  color: #585858;
  font-size: 13px;
  font-weight: bold;
  width: 25px;
  min-width: 25px;
  height: 25px;
  margin-left: ${props => props.customTheme.margin.left};
  margin-right: ${props => props.customTheme.margin.right};
  transform-origin: 50% 100%;
  animation: 0.3s ${BouncyKeyFrames} forwards ease;
`;

const ActorAvatar = props => <Avatar {...props}>{props.label}</Avatar>;

export default ActorAvatar;
