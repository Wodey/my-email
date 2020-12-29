import React from 'react';
import styled from 'styled-components';

const data = [{
  id: 0,
  name: "inbox",
  body: "Входящие"
},
{
  id: 1,
  name: "favourite",
  body: "Помеченные"
},
{
  id: 2,
  name: "sent",
  body: "Отправленные"
},
{
  id: 3,
  name: "draft",
  body: "Черновики"
}];

const Outline = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 30px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    background: #e8e8e8;
  }
`;
const Icon = styled.img`
  width: 1.3rem;
`;
const Body = styled.span`
  font-size: 1.2rem;
`;

const Item = ({icon, body}) => (
  <Outline>
    <Icon src={`icons/${icon}.svg`} />
    <Body>{body}</Body>
  </Outline>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Items = () => {
  return (
    <Wrapper>
      {
        data.map(i => <Item icon={i.name} body={i.body} />)
      }
    </Wrapper>
  )
};

export default Items;
