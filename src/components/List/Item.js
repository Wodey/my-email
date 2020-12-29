import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: .5fr .5fr 4fr 10fr 2fr;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
`;
const Check = styled.img`
  width: 1.3rem;
  cursor: pointer;
`;
const Star = styled.img`
  width: 1.3rem;
  cursor: pointer;
`;
const Span = styled.span`
  font-size: 1.3rem;
  overflow: hidden;
  white-space:nowrap;
`;

const Item = ({author, body, date}) => (
  <Wrapper>
    <Check src="icons/blank-check-box.svg"/>
    <Star src="icons/favourite.svg"/>
    <Span>{author}</Span>
    <Span>{body}</Span>
    <Span>{date}</Span>
  </Wrapper>
);

Item.propTypes = {
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Item;
