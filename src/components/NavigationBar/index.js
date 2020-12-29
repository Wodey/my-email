import React from "react";
import styled from 'styled-components';
import Button from "./Button";
import Items from "./Items";

const Wrapper = styled.div`
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 15px;
`;

const NavigationBar = () => {
  return (
    <Wrapper>
      <Button />
      <Items />
    </Wrapper>
  )
};

export default NavigationBar;
