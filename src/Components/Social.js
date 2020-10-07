import React from "react";
import styled from "styled-components";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";

const Social_Menu = styled.div`
  font-family: "Poppins", sans-serif;

  z-index: 1000;
  display: flex;
  position: fixed;
  flex-direction: column;
  margin-top: 400px;
  color: #0099ff;
  font-size: 2.5rem;
  ul {
    list-style-type: none;
    li {
      padding: 5px 0;
      margin: 10px 0;

      a {
        color: #0099ff;
      }
    }
    li:hover {
      color: #0099ff;
      border-bottom: 2px solid indigo;
      transition-timing-function: ease-in;
      cursor: pointer;
      height: fit-content;
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const Social = () => {
  return (
    <Social_Menu>
      <ul>
        <li>
          <a href="https://github.com/KevSage">
          <FaGithub />
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/kevsage">
          <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:ksagedeveloper@gmail.com">
          <AiOutlineMail />
          </a>
        </li>
        <li>
          <a href="mailto:ksagedeveloper@gmail.com">
          <AiOutlineTwitter />
          </a>
        </li>
      </ul>
    </Social_Menu>
  );
};
export default Social;
