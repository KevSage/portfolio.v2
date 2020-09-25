import React from "react";
import styled from "styled-components";
import Pic from "./Portfoliopic.jpeg";
import Typing from "react-typing-animation"
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
  background-position: left 30% top;

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
    font-size: 1.4rem;
  }
`;
const Intro = styled.div`
  margin-top: 0px;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  color: #97d8b2;
  // margin: 10px auto;
  font-size: 1rem;
  width: 50%;
  span {
    color: #0099ff;
    font-size: 1.5rem;

  }
  p {
    font-family: "Poppins", sans-serif;
    color: #97d8b2;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
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
      <Typing speed={20}>
      <Intro>
        <h2>Hi, </h2>
        <Typing.Delay ms={1000} />

        <h2>My name is Kevin Sage.</h2>
        <Typing.Delay ms={1000} />

        <h2>
          I specialize in <span>React</span> |{" "}
          <span>Ruby on Rails Development</span>
        </h2>
      </Intro>
      <Intro>
      <Typing.Delay ms={1000} />

        <Typing.Delay ms={500} />
        <span>Jazz Musician. </span>
        <Typing.Delay ms={500} />
        <span>Educator. </span>
        <Typing.Delay ms={500} />

        <span>World Traveller. </span>
        <Typing.Delay ms={500} />

        <span>Language Enthusiast. </span>
        <Typing.Delay ms={500} />

        <p>Check out some of my work </p>
      </Intro>
      </Typing>
    </Greeting>

  );
};
export default Main;
