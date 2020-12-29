import React from "react";
import styled from 'styled-components';
import Panel from "./Panel";
import Listing from "./Listing";

const Wrapper = styled.div`
  padding-top: 15px;
  width: 70%;
`;

const List = () => {
  return (
    <Wrapper>
      <Panel />
      <Listing />
    </Wrapper>
  )
};

export default List;
