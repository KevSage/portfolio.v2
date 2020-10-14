import React from "react";
import styled from "styled-components";
import Tongue from "../Media/Tongue.png";
import Festivalz from "../Media/Festivalz.png";
import Memory from "../Media/Memory.png";
import Pixel from "../Media/Pixel.png";
import Covid from "../Media/Covid.png";

import China from "../Media/China.png";
import Engadget from "../Media/Engadget.png";
import Fade from 'react-reveal/Fade';


import { FaGithub, FaCodepen } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
const Header = styled.div`
  height: 100px;
`;

const Work = styled.div`
  box-sizing: border-box;
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex-wrap: wrap;

  h3 {
    padding: 40px;
    font-size: 2rem;
    color: #0099ff;
  }
`;
const ProjectList = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  h3 {
    text-decoration: underline;
    text-align: center;
   
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }`;
const Project = styled.div`
  margin: 10px 10px;
  display: flex;
  width: 40%;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background: white;
  border-radius: 10px;
  text-align: left;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    img {
      width: 100%;
    }
  }
  h3 {
    font-family: "Poppins", sans-serif;
    color: indigo;
    font-size: 2rem;
    margin 0;
    padding-left: 20px;
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid indigo;
  color: indigo;
  padding: 0.5rem 0.5rem;
  width: 20%;
  margin: 20px;
  border-radius: 10px;
  text-decoration: none;
  &:hover {
    background: indigo;
    color: white;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: indigo;
    &:hover {
      color: white;
    }

  }
`;
const Description = styled.div`
  // width: 100%;
  padding: 20px;
  text-align: left;
  //   @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  
  p {
    font-size: 1rem;
  }
`;

const Banner = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  color: indigo;
  opacity: .8;
`

const Projects = () => {
  return (
    <Work classname="projects">
      <Header id="projects"></Header>

      <Banner>
        <h1 classname="projects">Projects</h1>
      </Banner>
      <Fade up cascade>

      <h3>React & Rails Projects</h3>

      <ProjectList >
        <Project>
          <Main>
            <h3 classname="projects" >Tongue.io</h3>
            <Description>
              <p>Tongue.io was my capstone project at Flatiron. It is a Language phrasebook and language translation program built on a Rails Backend and React.js frontend with redux for state management.</p>
             <p> Ruby on Rails | React.js | Redux | Material UI | JWToken | OAuth |
              Google Translate API</p>
            </Description>
            <Left>
              <img className="project_img" src={Tongue}></img>
              <div>
              <Button>
                <a
                    href="https://github.com/KevSage/tongue.io"
                    target="_blank"
                  >
                  <FaGithub />
                  </a>
                </Button>
                <Button>
                  <a
                    href="https://www.youtube.com/watch?v=-tKELO7anCM"
                    target="_blank"
                  >
                    Demo
                  </a>
                </Button>
              </div>
            </Left>
           
          </Main>
        </Project>
        <Project>
          <Main>
            <h3 classname="projects" >Covid-19 Tracker</h3>
            <Description>
              <p>This is a simple coronavirus tracker that keeps up with new coronavirus infections worldwide. New cases, recoveries and deaths are documented along with a bar graph showing coronavirus spread over time.</p>
             <p> React.js | Open Disease DB API | React Leaflet Maps | React ChartJS</p>
            </Description>
            <Left>
              <img className="project_img" src={Covid}></img>
              <div>
              <Button>
                <a
                    href="https://github.com/KevSage/Covid19-Tracker"
                    target="_blank"
                  >
                  <FaGithub />
                  </a>
                </Button>
                <Button>
                  <a
                    href="https://dazzling-khorana-b4e96d.netlify.app/"
                    target="_blank"
                  >
                    Demo
                  </a>
                </Button>
              </div>
            </Left>
           
          </Main>
        </Project>

        <Project>
          
          <Main>
            <h3 classname="projects">Who's Going</h3>
            <Description>
            <p>Festival & Artist Database where users can follow their favorite artists and festivals. Built on a Rails database and Vanilla Javascript.</p>
             <p> Ruby on Rails | Semantic UI | JavaScript |JWToken | OAuth </p>
            </Description>
            <Left>
              <img className="project_img" src={Festivalz}></img>
              <div>
                <Button>
                <a
                    href="https://github.com/KevSage/Festivalz"
                    target="_blank"
                  >
                  <FaGithub />
                  </a>
                </Button>
              </div>
            </Left>
            
          </Main>
        </Project>

          </ProjectList>
          </Fade >
          <Fade bottom>

        <h3>HTML/CSS & Vanilla JavaScript Projects</h3>
       <ProjectList>
        <Project>
          <Main>
            
            <h3 classname="projects">Memory Match - Dev Edition</h3>
            <Description>
              <p>Classic Memory Game. Match the web technologies in record time.</p>
              <p>HTML | CSS | Vanilla JavaScript</p>
            </Description>
            <Left>
              <img className="project_img" src={Memory}></img>
              <div>
                <Button >
                  <a
                    href="https://codepen.io/7vnkge/full/RyyKYG"
                    target="_blank"
                  >
                    <SiCodepen/>
                  </a>
                </Button>
              </div>
            </Left>
            
          </Main>
        </Project>
        <Project>
          <Main>
            <h3 classname="projects">Pixel Art Maker</h3>
            <Description>
             <p> Create your very own work of art by building a custom grid and filling in the pixels with your design. Don't forget to print your masterpiece when finished.</p>

              <p>HTML | CSS | Vanilla JavaScript</p>

            </Description>
            <Left>
              <img className="project_img" src={Pixel}></img>
              <div>
                <Button>
                <a
                    href="https://codepen.io/7vnkge/full/Nyvrmw"
                    target="_blank"
                  >
                    <SiCodepen/>
                  </a>                </Button>
              </div>
            </Left>
            
          </Main>
        </Project>
        </ProjectList>
        </Fade>
        <Fade bottom>

        <h3 classname="projects">HTML/CSS Sample Landing Pages</h3>
 <ProjectList>
        <Project>
          
          <Main>
            <h3>Travel China</h3>
            <Description>
            <p>Landing page for a travel website. </p>
             <p> HTML| CSS | JavaScript | Bootstrap</p>
            </Description>
            <Left>
              <img className="project_img" src={China}></img>
              <div>
              <Button>
                <a
                    href="https://codepen.io/7vnkge/full/Brpwox"
                    target="_blank"
                >
                    <SiCodepen/>
                </a>   
              </Button>
              </div>
            </Left>
            
          </Main>
        </Project>
        <Project>
          <Main>
            <h3 classname="projects">Engadget Clone</h3>
            <Description>
            <p>Techniq is a landing page for a technology site based on Engadget </p>
             <p> HTML| CSS | JavaScript | Bootstrap </p>
            </Description>
            <Left>
              <img className="project_img" src={Engadget}></img>
              <div>
              <Button>
                <a
                    href="https://codepen.io/7vnkge/full/jxWvKY"
                    target="_blank"
                >
                    <SiCodepen/>
                </a>   
              </Button>
              </div>
            </Left>
           
          </Main>
        </Project>
      </ProjectList>
      </Fade>
    </Work>
  );
};
export default Projects;
