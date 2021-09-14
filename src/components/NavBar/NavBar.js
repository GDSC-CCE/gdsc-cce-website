import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

import Button from "../../elements/Button";
import NButton from "../../elements/NButton";
import Logo from "./NavLogo";
import { WbSunny } from "@material-ui/icons";

const Nav = styled.nav`
  width: 100vw;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 9;

  background-color: ${(props) => props.theme.bg};
  @media (max-width: 850px) {
    height: 70px;
  }
`;
//box-shadow: 1px 1px 2px #cccccc;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  flex-grow: 0.1;
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
  closeMenu() {
    document.querySelector("#navlist").classList.remove("active");
  }
  render() {
    return (
      <Nav>
        <Link to="/">
          <Logo isMobile={this.state.isMobile}></Logo>
        </Link>
        <Ul id="navlist">
          <Button
            to="/events"
            onClick={() => this.closeMenu()}
            hovercolor="#34a853"
          >
            Events
          </Button>
          <Button
            to="/team"
            onClick={() => this.closeMenu()}
            hovercolor="#EA4335"
          >
            Team
          </Button>
          <NButton
            href="https://github.com/GDSC-CCE"
            target="_blank"
            rel="noreferrer"
            onClick={() => this.closeMenu()}
            hovercolor="#fbbc04"
          >
            Projects
          </NButton>
          <NButton
            href="https://gdsc.community.dev/christ-college-of-engineering-thrissur/"
            target="_blank"
            rel="noreferrer"
            hovercolor="#4285f4"
            onClick={() => this.closeMenu()}
            active
          >
            Join Us
          </NButton>
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
