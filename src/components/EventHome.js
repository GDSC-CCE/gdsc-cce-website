import React from "react";
import styled from "styled-components";
import Event from "../elements/Event";
import Page from "../elements/Page";

const MContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.bg};
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-evenly;
    align-items: center;
    padding-top:80px;
    scroll-snap-align: start;
`;
const Container = styled(Page)`
    justify-content: space-evenly;
`;
class Events extends React.Component {
  render() {
    return (
        <Container id="eventhome">
      <Event
        title="Web Dev Bootcamp"
        description="lorem ipsum dolo ro lorem ispum dolo about dsccce router is defined but never used so do listen this closely..."
        color="green"
        time="12 JAN"
      />
      <Event
        title="Web Dev Bootcamp"
        description="lorem ipsum dolo ro lorem ispum dolo about dsccce router is defined but never used so do listen this closely..."
        color="blue"
        time="Coming Soon"
      />
      <Event
        title="Web Dev Bootcamp"
        description="lorem ipsum dolo ro lorem ispum dolo about dsccce router is defined but never used so do listen this closely..."
        color="red"
      />
      </Container>
    );
  }
}

export default Events;
