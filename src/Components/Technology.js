import React from "react";
import styled from "styled-components";
import Udacity from "../Media/Udacity.svg.png"
import Flatiron from "../Media/Flatiron.png"

import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiCsswizardry,
  SiReact,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiRedux,
  SiRuby,
  SiRails,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiJest,
  SiReactrouter,
  SiPostman,
  SiMaterialUi,
  SiFirebase,
  SiNodeDotJs

} from "react-icons/si";

const Banner = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  color: indigo;
  opacity: .8;

  h1 {
    text-decoration: underline;
  }
`
const Header = styled.div`
  height: 80px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  background: white;

  @media only screen and (max-width: 600px) {
    flex-direction: column;  }
`;
const Tech = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0;
  color: #0099ff;

  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 2rem;
    list-style-type: none;
    flex-direction: row;
    margin: 10px;
    justify-content: center;
    padding: 0;
    li {
      padding: 15px;
      color: #0099ff;
      div {
        font-size: 1rem;
      }
      @keyframes float {
        0% {
          transform: translatey(0px);
        }
        50% {
          transform: translatey(-10px);
        }
        100% {
          transform: translatey(0px);
        }
      }
      animation: float 5s ease-in-out infinite;
    }
  }
`;
const Frontend = styled.div`
  width: 100%;
  z-index: 1;
  margin: 0 auto;
`;
const Backend = styled.div`
  width: 100%;
  z-index: 1;
  margin: 0 auto;
`;
const Exp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding: 20px;
  h4 {
    font-size: 1.4rem;
  }

  h3 {
    margin: 30px 0 10px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;  
    text-align: center;
  }
`;

const Skills = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;

`
const Edu = styled.div`
  display: flex;
  flex-direction: row;
  
  div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    p {
      width: 90%;
      text-align: left;
    }
    h6 {
      font-size: 1.5em;
      margin: 0;
    }
    h3 {
      margin: 0;
    }
    
    @media only screen and (max-width: 600px) {
      width: 100%;
      text-align: center;
      align-items: center;
      h3  {
        font-size 1em;
      }
      h6  {
        font-size 1em;
      }
    }
  }
  img {
    max-width: 200px;
    padding: 20px;
    
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;  }

`;

const Technology = () => {

  return (
    <>
      <Header id="skills"></Header>
      <Banner>      
        <h1>Skills and Experience</h1>
      </Banner>
      
      <Main>

      <Exp>
      <h4>My Skillset</h4>

          <Skills>
          Experienced in Ruby on Rails and JavaScript/React based programming. Possesses strong skills in frontend ui development and backend database management.
          </Skills>
          <h3>Education</h3>

        <Edu>
          <div>
            <img src={Udacity}></img>
            <h6>Certification: Frontend Nanodegree</h6>
            <p>4 month Nanodegree program that teaches students to be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. </p>
            <h3>Awards & Recognition</h3>
            <p>Grow With Google Scholarship Recipient</p>
            <h6>Currently Enrolled: Cloud Developer</h6>
            <p>Cloud development and deployment with AWS, microservices, Kubernetes clusters, and serverless application technology.</p>            
          </div>
          <div>
          <img src={Flatiron}></img>
          <h6>Certification: Full Stack Developer</h6>

          <p>15 week Immersive on campus course where we studied  Object-oriented and Functional programming. This allowed us to create complex, functional web applications from scratch. We accomplished this by learning to build our own databases with Ruby on Rails and integrating productive, scalable front-ends with React.js. </p>
            <h3> Awards & Recognition</h3>
            <p>Flatiron School Merit Scholar</p>
            <p>John Stanley Ford Fellowship</p>

          </div>
          

        </Edu>
        </Exp>
        <Tech>
          <Frontend>
            <h3>Frontend</h3>
            <ul>
              <li>
                <AiOutlineHtml5 />
                <div>HTML5</div>
              </li>
              <li>
                <SiCsswizardry style={{color: "#F28F3B"}}/>
                <div>CSS</div>
              </li>
              <li>
                <SiJavascript style={{color: "forestgreen"}}/>
                <div>JavaScript</div>
              </li>
              <li>
                <SiReact />
                <div>React.JS</div>
              </li>
              <li>
                <SiBootstrap style={{color: "indigo"}}/>
                <div>Bootstrap </div>
              </li>
              <li>
                <SiMaterialUi style={{color: "royalblue"}}/>
                <div>MaterialUI</div>
              </li>
              <li>
                <SiJest style={{color: "#944158"}}/>
                <div>Jest</div>
              </li>
              <li>
                <SiJquery style={{color: "#193453"}}/>
                <div>JQuery</div>
              </li>
              <li>
                <SiRedux style={{color: "#7D43BE"}}/>
                <div>Redux</div>
              </li>
              <li>
                <SiReactrouter style={{color: "#F14648"}}/>
                <div>React Router</div>
              </li>
            </ul>
          </Frontend>
          <Backend>
            {" "}
            <h3>Backend</h3>
            <ul>
              <li>
                <SiRuby style={{color: "#E51721"}}/>
                <div>Ruby</div>
              </li>
              <li>
                <SiRails style={{color: "#E51721"}}/>
                <div>Rails</div>
              </li>
              <li>
                <SiPostman style={{color: "#F36933"}}/>
                <div>Postman</div>
              </li>
              <li>
                <SiMysql style={{color: "#DD8904"}}/>
                <div>MySQL</div>
              </li>
              <li>
                <SiPostgresql style={{color: "#32648C"}}/>
                <div>Postgresql</div>
              </li>
              <li>
                <SiGithub style={{color: "black"}}/>
                <div>Github</div>
              </li>
              <li>
                <SiFirebase style={{color: "red"}}/>
                <div>Firebase</div>
              </li>
              <li>
                <SiNodeDotJs style={{color: "forestgreen"}}/>
                <div>Node.js</div>
              </li>
            </ul>
          </Backend>
        </Tech>
        
      </Main>
    </>
  );
};
export default Technology;
