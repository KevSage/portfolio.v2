import React from "react";
import styled from "styled-components";
import Pic from "./Portfoliopic.jpeg";

const Greeting = styled.div`
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
  p {
    font-family: "Poppins", sans-serif;
    color: #0099ff;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    color: #97d8b2;
    span {
      color: #0099ff;
    }
  }
`;
const Intro = styled.div`
  margin-top: 0px;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  color: #97d8b2;
  // margin: 10px auto;
  font-size: 1.1rem;
  width: 40%;
  span {
    color: #0099ff;
  }
  p {
    font-family: "Poppins", sans-serif;
    color: #97d8b2;
  }
`;
const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid royalblue;
  color: #97d8b2;
  padding: 1em 1em;
  margin: 50px auto;
  &:hover {
    background: #0099ff;
    color: #97d8b2;
    cursor: pointer;
  }
`;

const Main = () => {
  return (
    <Greeting id="top">
      <Intro>
        <h2>My name is Kevin Sage.</h2>
        <h2>
          I specialize in <span>React</span> |{" "}
          <span>Ruby on Rails Development</span>
        </h2>
      </Intro>
      <Intro>
        <span>Jazz Musician. </span>
        <span>Educator. </span>
        <span>World Traveller. </span>
        <span>Language Enthusiast. </span>
      </Intro>
      {/* <Button>Holla at me!</Button> */}

      {/* <div class="hero" id="tsparticles">
        <div className="w wave"></div>
        <div className="w wave2"></div>
        <div className="w wave3"></div>
        <div className="w wave4"></div>
      </div> */}
    </Greeting>
  );
};
export default Main;
