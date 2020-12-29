import React from "react";
import styled from 'styled-components';


const ArrowWrap = styled.div`
  display: flex;
  gap: 5px;
`;
const Box = styled.img`
  width: 1.4rem;
  cursor: pointer;
`;
const DownArrow = styled.img`
  width: .9rem;
  cursor: pointer;
`;

const Arrows = () => (
    <ArrowWrap>
      <Box src="/icons/blank-check-box.svg" />
      <DownArrow src="/icons/down-chevron.svg" />
    </ArrowWrap>
);

const MoreWrap = styled.div``;
const MoreIcon = styled.img`
  width: 1.2rem;
  cursor: pointer;
`;

const More = () => (
  <MoreWrap>
    <MoreIcon src="icons/more.svg" />
  </MoreWrap>
)
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
`;

const Reload = styled.img`
  width: 1.4rem;
  transform: scale(-1, 1);
  cursor: pointer;
`;

const Panel = () => {
  return (
    <Wrapper>
      <Arrows />
      <Reload src="icons/reload.svg"/>
      <More />
    </Wrapper>
  )
};

export default Panel;
