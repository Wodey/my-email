import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 150px;
  margin-left: 30px;
  padding: 8px;
  cursor: pointer;
  border: 2px solid ${props => props.theme.maincolor};
  border-radius: 10px;

`;
const Icon = styled.img`
  width: 2rem;
`;
const Body = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.1rem;
  cursor: pointer;
`;

const Button = () => {
  return (
    <Wrapper>
      <Icon src="icons/write.svg"/>
      <Body>Написать</Body>
    </Wrapper>
  )
};

export default Button;
