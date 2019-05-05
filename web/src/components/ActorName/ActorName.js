import React from "react";
import styled, { css } from "styled-components";

const style = ({ theme }) => css`
  display: ${theme.actorName.display};
  font-size: 12px;
  color: #585858;
  margin-left: ${theme.actorName.margin.left};
  margin-right: ${theme.actorName.margin.right};
`;
const Name = styled.div([style]);

const ActorName = props => <Name {...props}>{props.label}</Name>;

export default ActorName;
