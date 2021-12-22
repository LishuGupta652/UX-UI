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

    .flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        margin-right: 10px;
        li {
          padding: 2px 10px;
          color: green;
          font-size: 1.2rem;
          border: 1px solid green;
          border-radius: 5px;
        }
      }
    }

    .link-container {
      width: 100%;
      height: fit-content;
      padding: 0 10px;
      transition: all 0.15s ease-in-out;
    }

    .link-container:hover {
      background-color: #f5f5f5;
      border-left: 5px solid red;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
            <Link to="/fiber">
              <div className="flex-container">
                <h1>
                  01 <span>React fiber</span>
                </h1>
                <div className="tag">
                  <ul>
                    <li>3d</li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/fiber">
              <h1>
                02 <span>React fiber</span>
              </h1>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/fiber">
              <h1>
                03 <span>React fiber</span>
              </h1>
            </Link>
          </div>
        </div>
      </Homepage>
    </>
  );
};

export default Home;
