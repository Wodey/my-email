import React from 'react';
import styled from 'styled-components';
import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

`;

const date = [
  {
    author: "firebase-noreply",
    body: "Why are people still learning PHP?This is an interesting question because the longer I am involved in web development, the more I come to appreciate that",
    date: "1 December"
  },
  {
    author: "Архипова Мария",
    body: "Test",
    date: "2 December"
  },
  {
    author: "П.В. Ягодовский",
    body: "116.pdf - С уважением П.В.Ягодовский",
    date: "23 October"
  }
];

const Listing = () => {
  return (
    <Wrapper>
      {
        date.map(i => <Item author={i.author} body={i.body} date={i.date} />)
      }
    </Wrapper>
  )
};

export default Listing;
