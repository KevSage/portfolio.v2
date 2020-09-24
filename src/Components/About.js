import React from "react";
import styled from "styled-components";
import Pic from "../Media/avatar.JPG";
import Jazz from "../Media/jazz.png";
import China from "../Media/chinasvg.png";
import Coding from "../Media/code.png";

const Header = styled.div`
  height: 80px;
`;
const Bio = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  color: #97d8b2;
  font-size: 1.1rem;
  width: 80%;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    text-align: center;
    border-radius: 100%;
  }
  p {
    font-size: 1.3rem;
  }
`;
const Interests = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Music = styled.div`
  margin: 1%;
  padding: 5%;
  background: linear-gradient(rgba(75, 0, 130, 0.95), rgba(75, 0, 130, 0.8)),
    url(${Jazz});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const Travel = styled.div`
  margin: 1%;
  padding: 5%;

  background: linear-gradient(rgba(75, 0, 130, 0.95), rgba(75, 0, 130, 0.8)),
    url(${China});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const Code = styled.div`
  margin: 1%;
  padding: 5%;
  background: linear-gradient(rgba(75, 0, 130, 0.95), rgba(75, 0, 130, 0.8)),
    url(${Coding});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const About = () => {
  return (
    <>
      <Header id="about"></Header>
      <div className="hero">
        <Bio>
          <img src={Pic}></img>
          <h2>ABOUT KEVIN</h2>
          <p>
            The study of music and my extensive travel abroad has provided an
            astute understanding of the functionality and application of
            Language. Syntax, pattern recognition and process, skills that I've
            acquired from life experience translates exceptionally well to
            writing code.
          </p>
          <Interests>
            <Music>
              {/* <img src={Jazz}></img> */}
              Originally from Tampa, FL. Attended Florida State University
              before relocating to Dalian China. Worked as an English Teacher,
              Saxophonist and Clinician.{" "}
            </Music>
            <Travel>
              Originally from Tampa, FL. Attended Florida State University
              before relocating to Dalian China. Worked as an English Teacher,
              Saxophonist and Clinician.{" "}
            </Travel>
            <Code>
              Originally from Tampa, FL. Attended Florida State University
              before relocating to Dalian China. Worked as an English Teacher,
              Saxophonist and Clinician.{" "}
            </Code>
          </Interests>
        </Bio>
      </div>
    </>
  );
};
export default About;
