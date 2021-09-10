import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Background = styled.div`
    width: 100vw;
    background-color: ${props => props.theme.bg};
`;

const ContentWrapper = styled.div`
    max-width: 1200px;
    background-color: inherit;
    margin: auto;
`;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isDark: false,
        };
    }

    render() {
        return (
            <Background>
                <ContentWrapper>
                    <Router>
                        <h1>Hello World</h1>
                    </Router>
                </ContentWrapper>
            </Background>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

