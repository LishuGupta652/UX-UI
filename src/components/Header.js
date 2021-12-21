import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: #ffcccc;
  padding: 20px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-around;

  ul {
    display: inline-block;
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
