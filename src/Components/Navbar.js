import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@300&display=swap");
  background: indigo;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #97d8b2;
  padding: 20px;
  z-index: 1000;
  height: 90px;
  position: fixed;
  top: 0%;
`;
const Logo = styled.div`
  display: flex;
  position: fixed;
  color: #0099ff;
  justify-content: flex-start;
  width: 50%;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: 5px;
`;
const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  position: fixed;
`;
const Menu_Items = styled.div`
  list-style-type: none;
  display: flex;

  li {
    padding: 20px 10px;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }

  @media only screen and (max-width: 600px) {
    li {
      display: none
    }
  }
  li:hover {
    color: #0099ff;
    border-bottom: 2px solid royalblue;
    transition-timing-function: ease-in;
    cursor: pointer;
    height: fit-content;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <Logo classname="logo">
        <Link
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          duration={1000}
        >
          KEV SAGE
        </Link>
      </Logo>
      <Menu>
        <Menu_Items>
          
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              About Me
            </Link>
          </li>
          
        </Menu_Items>
      </Menu>
    </Nav>
  );
};
export default Navbar;
