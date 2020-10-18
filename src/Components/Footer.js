import React, { Component } from "react";
import styled from "styled-components";

const Foot = styled.div`
  background-color: #f9f9f3;
  height: 100px;
`;
class Footer extends Component {
  state = {};
  render() {
    return (
      <Foot>
        <p>Copyright &copy; Kev Sage Developer.</p>
      </Foot>
    );
  }
}

export default Footer;
