import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 20px;
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
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
            <a href="https://www.lishu.ml">LISHU.ML</a>
          </li>
        </ul>
      </Flex>
    </Nav>
  );
};

export default Header;
