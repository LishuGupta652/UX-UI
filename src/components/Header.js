import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: #474787;
  padding: 20px;
  color: white;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ul {
    display: flex;
    li {
      margin-right: 20px;
      font-size: 1.2rem;
    }
  }
`;
const Header = () => {
  return (
    <Nav>
      <Flex>
        <h1>GITMAN STORE</h1>
        <ul>
          <li>3d fiber</li>
          <li>2d fiber</li>
        </ul>
      </Flex>
    </Nav>
  );
};

export default Header;
