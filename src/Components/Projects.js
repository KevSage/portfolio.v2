import React from "react";
import styled from "styled-components";
import Tongue from "../Media/Tongue.png";
import Festivalz from "../Media/Festivalz.png";
import Memory from "../Media/Memory.png";
import Pixel from "../Media/Pixel.png";

import China from "../Media/China.png";
import Engadget from "../Media/Engadget.png";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


import { FaGithub, FaCodepen } from "react-icons/fa";
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
`;
const ProjectList = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  // align-items: left;
`;
const Project = styled.div`
  margin: 10px 10px;
  display: flex;
  width: 40%;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  h3 {
    font-family: "Poppins", sans-serif;
    color: #97d8b2;
    font-size: 2rem;
    margin 0;
  }
  img {
    width: 100%;
    height: 330px;
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
  }
`;

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid royalblue;
  color: #97d8b2;
  padding: 0.8rem 0.8rem;
  width: 100%;
  margin: 20px;
  &:hover {
    background: #0099ff;
    color: #97d8b2;
    cursor: pointer;
  }
`;
const Description = styled.div`
  width: 100%;
  padding: 20px;
  text-align: left;
  //   @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
`;
const Projects = () => {
  return (
    <Work id="projects">
      <Header></Header>
      <h1>Projects</h1>
      <Fade up cascade>

      <h3>React & Rails Projects</h3>

      <ProjectList>
        <Project>
          <Main>
            <h3>Tongue.io</h3>

            <Left>
              <img className="project_img" src={Tongue}></img>
              <div>
                <Button>
                  <FaGithub />
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
            <Description>
              Ruby on Rails | React.js | Redux | Material UI | JWToken | OAuth |
              Google Translage API
            </Description>
          </Main>
        </Project>

        <Project>
          
          <Main>
            <h3>Who's Going</h3>

            <Left>
              <img className="project_img" src={Festivalz}></img>
              <div>
                <Button>
                  <FaGithub />
                </Button>
                <Button>Demo</Button>
              </div>
            </Left>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
              porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
              Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
              Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
              tincidunt tristique.
            </Description>
          </Main>
        </Project>

          </ProjectList>
          </Fade >
          <Fade bottom>

        <h3>HTML/CSS & Vanilla JavaScript Projects</h3>
       <ProjectList>
        <Project>
          <Main>
            
            <h3>Memory Match - Dev Edition</h3>

            <Left>
              <img className="project_img" src={Memory}></img>
              <div>
                <Button>
                  <FaGithub />
                </Button>
                <Button>Demo</Button>
              </div>
            </Left>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
              porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
              Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
              Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
              tincidunt tristique.
            </Description>
          </Main>
        </Project>
        <Project>
          <Main>
            <h3>Pixel Art Maker</h3>

            <Left>
              <img className="project_img" src={Pixel}></img>
              <div>
                <Button>
                  <FaGithub />
                </Button>
                <Button>Demo</Button>
              </div>
            </Left>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
              porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
              Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
              Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
              tincidunt tristique.
            </Description>
          </Main>
        </Project>
        </ProjectList>
        </Fade>
        <Fade bottom>

        <h3>HTML/CSS Sample Landing Pages</h3>
 <ProjectList>
        <Project>
          
          <Main>
            <h3>Travel China</h3>

            <Left>
              <img className="project_img" src={China}></img>
              <div>
                <Button>
                  <FaCodepen />
                </Button>
              </div>
            </Left>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
              porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
              Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
              Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
              tincidunt tristique.
            </Description>
          </Main>
        </Project>
        <Project>
          <Main>
            <h3>Engadget Clone</h3>

            <Left>
              <img className="project_img" src={Engadget}></img>
              <div>
                <Button>
                  <FaCodepen />
                </Button>
              </div>
            </Left>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non lobortis urna, at mollis leo. Pellentesque quis felis eu nunc
              porttitor placerat sed ut ligula. Pellentesque vitae magna sapien.
              Nunc in ligula rhoncus, efficitur massa eget, pellentesque ipsum.
              Integer tempus ultricies purus, nec ultrices sem pulvinar vel. In
              tincidunt tristique.
            </Description>
          </Main>
        </Project>
      </ProjectList>
      </Fade>
    </Work>
  );
};
export default Projects;
