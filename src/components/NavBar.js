import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

import Button from "../elements/Button";
import Logo from "./NavLogo";
import { WbSunny } from "@material-ui/icons";

const Nav = styled.nav`
  width: 100vw;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 9;
  box-shadow: 1px 1px 2px #cccccc;

  background-color: inherit;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  flex-grow: 0.2;
  background-color: ${(props) => props.theme.bg};
  @media (max-width: 850px) {
    display: none;
  } ;
`;

const HamBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  display: none;

  @media (max-width: 850px) {
    display: flex;
  }

  span {
    display: block;
    background-color: ${(props) => props.theme.text};
    height: 2px;
    margin: 2px;
    width: 20px;
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    const handler = (e) => {
      this.setState({
        isMobile: e.matches,
      });
    };
    //guess device platform
    window.matchMedia("(max-width:600px)").addEventListener("change", handler);
  }
  handleClick() {
    document.querySelector("#navlist").classList.toggle("active");
  }
  render() {
    return (
      <Nav>
        <Link to="/">
          <Logo isMobile={this.state.isMobile}></Logo>
        </Link>
        <Ul id="navlist">
          <Button to="/events" hovercolor="#34a853">
            Events
          </Button>
          <Button to="/team" hovercolor="#EA4335">
            Team
          </Button>
          <Button to="/projects" hovercolor="#fbbc04">Projects</Button>
          <Button hovercolor="#4285f4" active>
            Join Us
          </Button>
          <WbSunny
            style={{
              color: this.props.iconColor,
              cursor: "pointer",
              margin: "0 20px",
            }}
            onClick={this.props.onClick}
          />
        </Ul>
        <HamBtn className="navbtn" onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </HamBtn>
      </Nav>
    );
  }
}

export default NavBar;