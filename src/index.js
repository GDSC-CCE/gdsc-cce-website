import React from "react";
import ReactDOM from "react-dom";
import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";


const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.bg};
`;

const ContentWrapper = styled.div`
    background-color: inherit;
    margin: auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
`;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isDark: false,
            isHome: false
        };
    }
    handleClick() {
      this.setState({isDark: !this.state.isDark});
  }

    render() {
      let theme = {
      bg: this.state.isDark? "#121212" : "white",
      text: this.state.isDark? "white" : "black",
      textAlt: this.state.isDark? "#444" : "#aeaeae",
      blue: "#4285f4",
      red: "#ea4335",
      yellow: "#fbbc04",
      green: "#34a853",
      blueAlt: "#e3f2fd",
      redAlt: "#ffebee",
      yellowAlt: "#fff8e1",
      greenAlt: "#e8f5e9",

    };
        return (
          <ThemeProvider theme={theme} >
                    <Router>
                <ContentWrapper>
                    <NavBar
                        onClick={() => this.handleClick()} 
                        iconColor={theme.text}
                    ></NavBar>
                    <Home />
                </ContentWrapper>
                    </Router>
          </ThemeProvider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

