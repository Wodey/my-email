import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Icon = styled.img`
  width: 1.8rem;
  cursor: pointer;
`;

const Settings = () => {
  return (
    <Wrapper>
      <Icon src="icons/settings.svg"/>
    </Wrapper>
  )
};

export default Settings;
