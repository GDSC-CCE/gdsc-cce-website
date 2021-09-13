import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Events from "./components/EventHome";
import TeamHome from "./components/TeamHome";
import Team from "./components/Team/Team";
import Footer from "./components/Footer";


const ContentWrapper = styled.main`
  background-color: inherit;
  margin: auto;
  width: 100vw;
  height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }

  --ms-overflow-style: none;
  scrollbar-width: none;

`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isDark: false,
      isHome: false,
    };
  }
  handleClick() {
    this.setState({ isDark: !this.state.isDark });
  }

  render() {
    let theme = {
      bg: this.state.isDark ? "#121212" : "white",
      text: this.state.isDark ? "white" : "black",
      textAlt: "#808080",
      blue: "#4285f4",
      red: "#ea4335",
      yellow: "#fbbc04",
      green: "#34a853",
      blueAlt: "#e3f2fd",
      redAlt: "#ffebee",
      yellowAlt: "#fff8e1",
      greenAlt: "#e8f5e9",
      elevatedbg:"hsla(0,0%,100%,.01)",
      isDark: this.state.isDark
    };
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ContentWrapper>
            <NavBar
              onClick={() => this.handleClick()}
              iconColor={theme.text}
            />
            <Switch>
              <Route exact path="/">
                <Home />
                <Events />
                <TeamHome />
                <Footer />
              </Route>
              <Route exact path="/team" component={Team} />
            </Switch>
          </ContentWrapper>
        </Router>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
