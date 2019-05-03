import React from "react";
import styled from "styled-components";

const Name = styled.div`
  display: ${props => (props.hide === true ? "none" : "block")};
  font-size: 12px;
  color: #585858;
  margin-left: ${props =>
    props.themeDialogDirection === "incoming" ? "45px" : "0px"};
  margin-right: ${props =>
    props.themeDialogDirection !== "incoming" ? "45px" : "0px"};
`;

const ActorName = props => {
  return (
    <Name hide={props.hide} themeDialogDirection={props.themeDialogDirection}>
      {props.label}
    </Name>
  );
};

export default ActorName;
