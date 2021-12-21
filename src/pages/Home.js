import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Homepage = styled.div`
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100pqx;
  text-align: justify;
`;

const Home = () => {
  return (
    <Homepage>
      <Header />
      <h1>homepage</h1>
    </Homepage>
  );
};

export default Home;
