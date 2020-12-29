import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Icon = styled.div`
  background: #ccc;
  border-radius: 50%;
  height: 1.8rem;
  width: 1.8rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Account = () => {
  return (
    <Wrapper>
      <Icon>
        U
      </Icon>
    </Wrapper>
  )
};

export default Account;
