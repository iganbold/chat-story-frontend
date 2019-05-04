import React from "react";
import styled from "styled-components";

const Name = styled.div`
  display: ${props => props.customTheme.display};
  font-size: 12px;
  color: #585858;
  margin-left: ${props => props.customTheme.margin.left};
  margin-right: ${props => props.customTheme.margin.right};
`;

const ActorName = props => <Name {...props}>{props.label}</Name>;

export default ActorName;
