import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Homepage = styled.div`
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  margin-top: 100pqx;
  text-align: justify;

  .home {
    height: 500px;
    text-transform: uppercase;
    display: flex;
    margin: 10px auto;
  }
`;

const Home = () => {
  return (
    <Homepage>
      <Header />
      <div className="home">
        <h1>Homepage</h1>
      </div>
    </Homepage>
  );
};

export default Home;
