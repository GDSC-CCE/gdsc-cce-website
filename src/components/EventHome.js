import React from "react";
import styled from "styled-components";
import Event from "../elements/Event";
import Page from "../elements/Page";
import Button from "../elements/Button";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
`;

class Events extends React.Component {
  render() {
    return (
      <Page>
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
        <Button>View All ></Button>
      </Page>
    );
  }
}

export default Events;
