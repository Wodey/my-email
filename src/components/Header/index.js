import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import Setting from "./Settings";
import Account from "./Account";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 13fr 1fr 1fr;
  height: 70px;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <Search />
    <Setting />
    <Account />
  </Wrapper>
);

export default Header;
