import React from "react";
import { Link } from "react-router-dom";
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
    .link-container {
      width: 100%;
      height: fit-content;
      padding: 0 10px;
      transition: all 0.2s;
    }

    .link-container:hover {
      background-color: #f5f5f5;
      border-left: 5px solid red;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Homepage>
        <div className="home">
          <div className="link-container">
            <h1>
              <Link to="/fiber">
                01 <span>React fiber</span>
              </Link>
            </h1>
          </div>
        </div>
      </Homepage>
    </>
  );
};

export default Home;
