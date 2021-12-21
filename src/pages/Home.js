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

  .home {
    h1 {
      font-size: 100px;
      letter-spacing: 10px;
      span {
        font-size: 50px;
        color: #424242;
        letter-spacing: 1px;
      }
    }
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Homepage>
        <div className="home">
          <h1>
            01 <span>React fiber</span>
          </h1>
        </div>
      </Homepage>
    </>
  );
};

export default Home;
