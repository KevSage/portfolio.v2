import React from "react";
import styled from "styled-components";
import Pic from "../Media/avatar.JPG";
import Jazz from "../Media/jazz.png";
import China from "../Media/hanzi.svg";
import Coding from "../Media/code.png";

const Header = styled.div`
  height: 80px;
`;
const Bio = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  color: #97d8b2;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: auto;
    width: 100%;
    max-width: 300px;
    text-align: center;
    border-radius: 100%;
  }
  p {
    font-size: .8rem;
  }
`;
const Interests = styled.div`
  display: flex;
  flex-direction: row;
  background: #F6F6F6;
  // border-radius: 20px;
  color: #0099ff;
  h3 {
    color: black;
  }
  q {
    padding: 30px;
    font-size: .8rem;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
 
`;
const Music = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid indigo;
margin: 10px;

  padding: 2%;
  img {
    height: 7rem;
    width: 6rem;
    margin: 0 auto;
    filter: invert(44%) sepia(99%) saturate(2739%) hue-rotate(182deg) brightness(102%) contrast(107%);  
  }

  &:hover {
    background: white;
  }

`;
const Travel = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid indigo;
  margin: 10px;

  img {
    height: 7rem;
    width: 7rem;
    margin: 0 auto;
    filter: invert(44%) sepia(99%) saturate(2739%) hue-rotate(182deg) brightness(102%) contrast(107%);  
  }
  &:hover {
    background: white;
  }
`;
const Code = styled.div`
  padding: 2%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid indigo;
  margin: 10px;
  img {
    height: 5rem;
    width: 5rem;
    margin: 0 auto;
    filter: invert(44%) sepia(99%) saturate(2739%) hue-rotate(182deg) brightness(102%) contrast(107%);  
  }
  &:hover {
    background: white;
  }
`;
const About = () => {
  return (
    <>
      <div className="hero">
      <Header id="about"></Header>

        <Bio>
          <img src={Pic}></img>
          <h2>ABOUT KEVIN</h2>
          <p>
            The study of music and my extensive travel abroad has provided an
            astute understanding of the functionality and application of
            Language. Syntax, pattern recognition and process, skills that I've
            acquired from life experience translates exceptionally well to
            writing code. 
            <p> Here are some of the languages I speak.</p>
          </p>
          <Interests>
            <Music>
              <img src={Jazz}></img>
              <h3>Music</h3>
              
              <q>Jazz improvisation activates the same areas of the brain typically associated with spoken language — specifically, regions that help people interpret syntax or the structure of language.</q>
             
              <p>I'm a jazz musician. I attended the prestigious Blake School of the Arts in Tampa, FL, which granted me a scholarship to attend Flordia State University's Jazz Program.
              </p>

              <a href="https://www.youtube.com/watch?v=34P70IKBcLo"> Check Me out!</a>
              
            </Music>
            <Travel>
            <img src={China}></img>
            <h3>Chinese</h3>
              <q>Chinese is one of the hardest languages to learn for native English speakers. 

              The language consists of tens of thousands of characters that make ultimate fluency a daunting task. 
              </q>
              <p>
              While In China, I worked as an in demand session and performing saxophonist. I've appeared in Chinese film, television and magazines. 
              In 2014, I opened a music academy teaching jazz and English to dozens of students.               </p>
            </Travel>
            <Code>
            <img src={Coding}></img>
            <h3>Code</h3>
            <q>Like human languages, computer code has a structure, vocabulary and rules that make it work.</q>
            <p>
              After a year of independent self study, in 2018 I was awarded a scholarship in the Grow with Google program, which granted me a Frontend Nanodegree. In 2019, I relocated to Atlanta, Ga to attend the Flatiron School Full Stack Development Program.</p>
              
            </Code>
          </Interests>
        </Bio>
      </div>
    </>
  );
};
export default About;
