import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 20px;
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
        <h1>
          <Link to="/">GITMAN STORE</Link>
        </h1>
        <ul>
          <li>
            <Link to="/fiber">3d Fiber</Link>
          </li>
          <li>2d fiber</li>
        </ul>
      </Flex>
    </Nav>
  );
};

export default Header;
