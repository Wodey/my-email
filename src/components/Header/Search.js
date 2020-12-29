import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background: #f7f7f7;
  width: 600px;
  border-radius: 10px;
  height: 50px;
  padding-left: 15px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 80%;
  font-size: 1.5rem;
  background: transparent;
  padding-left: 15px;
`;
const Icon = styled.img`
  width: 1.2rem
`;

const Search = () => {
  return (
    <Wrapper>
      <Icon src="/icons/search.svg"/>
      <Input />
    </Wrapper>
  )
};

export default Search;
