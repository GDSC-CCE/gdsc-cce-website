import React from "react";
import styled from "styled-components";
import CPage from "../../elements/Page";
import Button from "../../elements/Button";
import { Recent } from "./Events";

const Page = styled(CPage)`
  flex-direction: column;
  justify-content: space-evenly;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 900px) {
    > div:nth-child(odd) {
      display: none;
    }
  }
  width: 100vw;
`;

class Events extends React.Component {
  render() {
    return (
      <Page id="eventhome">
        <Container>{Recent}</Container>
        <Button to="/events">View All ></Button>
      </Page>
    );
  }
}

export default Events;
