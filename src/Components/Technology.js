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
} from "react-icons/si";
const Header = styled.div`
  height: 80px;
`;
const Main = styled.div`
  display: flex;
  // flex-direction: row;
  width: 80%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin: 0 auto;
`;
const Tech = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  width: 50%;
  // margin: 100px auto;
  margin-bottom: 0;
  color: #0099ff;
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 2.9rem;
    list-style-type: none;
    flex-direction: row;
    margin: 10px;

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
  width: 50%;
  text-align: left;
  padding: 20px;
`;

const Skills = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const Edu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  img {
    width: 150px;
  }

`;

const Technology = () => {
  return (
    <>
      <Header id="skills"></Header>
      <h1>Skills and Experience</h1>
      
      <Main>

      <Exp>
      <h4>My Skillset</h4>

          <Skills>
          Experienced in Ruby on Rails and JavaScript/React based programming. Possesses strong skills in frontend ui development and backend database management.
          </Skills>
        <Edu>
          <h3>Education</h3>
          <div>
            <img src={Udacity}></img>

            <h6>Certification: Frontend Nanodegree</h6>
            Awards & Recognition
            <p>Grow With Google Scholarship Recipient</p>
          </div>
          <div>
          <img src={Flatiron}></img>
            <h6>Certification: Full Stack Developer</h6>
            Awards & Recognition
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
            </ul>
          </Backend>
        </Tech>
        
      </Main>
    </>
  );
};
export default Technology;
