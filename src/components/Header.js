import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 32px;
  max-width: 1200px;
  margin: 10px auto;
  position: fixed;
  top: 0;
  min-width: 800px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  background: rgb(203, 162, 102);
  background: -moz-linear-gradient(
    90deg,
    rgba(203, 162, 102, 0.8) 0%,
    rgba(229, 196, 122, 0.95) 0%,
    rgba(233, 196, 93, 0.8) 58%,
    rgba(236, 190, 134, 0.8) 83%,
    rgba(222, 183, 98, 0.8) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(203, 162, 102, 0.8) 0%,
    rgba(229, 196, 122, 0.95) 0%,
    rgba(233, 196, 93, 0.8) 58%,
    rgba(236, 190, 134, 0.8) 83%,
    rgba(222, 183, 98, 0.8) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(203, 162, 102, 0.8) 0%,
    rgba(229, 196, 122, 0.95) 0%,
    rgba(233, 196, 93, 0.8) 58%,
    rgba(236, 190, 134, 0.8) 83%,
    rgba(222, 183, 98, 0.8) 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#cba266",endColorstr="#deb762",GradientType=1);
`;
const Flex = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  ul {
    color: red;
    font-size: 1.2rem;
    li {
      margin-right: 20px;
      display: inline-block;
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
