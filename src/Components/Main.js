import React, { Component, Suspense } from "react";
import { FaDivide } from "react-icons/fa";
import styled from "styled-components";
import Pic from "../Media/Portfoliopic.jpeg";

const Greeting = React.lazy(() => import("./Greeting"));
class Main extends Component {
  state = {};

  render() {
    const Loading = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-top: 150px;
      width: 100%;
      text-align: left;
      height: 100vh;
      background: linear-gradient(rgba(75, 0, 130, 0.7), rgba(75, 0, 130, 0.99)),
        /* bottom, image */ url(${Pic});

      background-size: cover;
      background-repeat: no-repeat;
      background-position: left 30% top;
      // background-attachment: fixed;

      p {
        font-family: "Poppins", sans-serif;
        color: #0099ff;
      }
      h2 {
        font-family: "Poppins", sans-serif;
        color: white;
        span {
          color: #0099ff;
        }
        font-size: 1.7rem;
      }
    `;
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Greeting />
        </Suspense>
      </div>
    );
  }
}

export default Main;
