import styled from "styled-components";
import CPage from "../elements/Page";
import React from "react";

const Page = styled(CPage)`
  section {
    display: flex;
    justify-content: center;
    align-items: center;

    height: cacl(100% - 80px);
    flex: 1;

    font-size: 35px;
    font-weight: 500;
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1200px) {
  }
`;

const LeftWrapper = styled.section`
  flex-direction: column;
`;

const Circle = styled.div`
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.text};

  background-color: rgba(0, 0, 0, 0.05);

  height: min(74vh, 40vw);
  width: min(74vh, 40vw);
  @media (max-width: 1200px) {
    height: min(74vh, 90vw);
    width: min(74vh, 90vw);
  }
  min-height: 320px;
  min-width: 320px;

  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px;

  transition: 0.1s;
  :hover {
    transform: scale(1.03);
  }
`;
const Cwrapper = styled.div``;

const Ctext = styled.p`
  font-weight: 400;
  margin: 10px 0;
  font-size: 18px;
  padding: 10;
  @media (max-width: 700px) {
    font-size: 3vw;
  }
`;

const RightWrapper = styled.section`
  flex-direction: column;
`;
const Ecardswrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  flex-basis: min(calc(70vh + 20px), calc(40vw + 20px));
  @media (max-wdith: 1200px) {
    flex-basis: min(calc(70vh + 20px), calc(80vw + 20px));
  }
  max-width: 80vh;
  flex-grow: 0;

  margin: 10px 0;

  @media (max-width: 500px) {
    max-width: 360px;
    flex-basis: 360px;
  }
`;

const ECard = styled.div`
  flex-basis: 200px;
  flex-shrink: 1;
  height: 200px;

  height: min(35vh, 20vw);
  flex-basis: min(35vh, 20vw);
  @media (max-width: 1200px) {
    height: min(35vh, 40vw);
    flex-basis: min(35vh, 40vw);
  }

  margin: 5px;
  padding: 5px;

  @media (max-width: 500px) {
    flex-basis: 170px;
    height: 170px;
    font-size: 25px;
  }
  transition: 0.1s;
  :hover {
    transform: scale(1.05);
  }

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-size: 30px;
  font-weight: 500;

  color: ${(props) => props.theme[props.color]};

  border: 2px solid ${(props) => props.theme[props.color]};
  background-color: ${(props) => props.theme[`${props.color}Alt`]};

  border-radius: 10px;
  border-top-left-radius: ${(props) => props.borderTopLeft || "10px"};
  border-top-right-radius: ${(props) => props.borderTopRight || "10px"};
  border-bottom-left-radius: ${(props) => props.borderBottomLeft || "10px"};
  border-bottom-right-radius: ${(props) => props.borderBottomRight || "10px"};
`;

const Multi = (
  <>
    <Page id="about">
      <LeftWrapper>
        Who are we ?
        <Circle>
          <Ctext>
            Google Developer Student Clubs (GDSC) are community groups for
            college and university students interested in Google developer
            technologies.
          </Ctext>
          <Ctext>
            By joining a GDSC, students grow their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and
            their community.
          </Ctext>
        </Circle>
      </LeftWrapper>
    </Page>
    <Page>
      <Events />
    </Page>
  </>
);
const Single = (
  <Page id="about">
    <LeftWrapper>
      Who are we ?
      <Cwrapper>
        <Circle>
          <Ctext>
            Google Developer Student Clubs (GDSC) are community groups for
            college and university students interested in Google developer
            technologies.
          </Ctext>
          <Ctext>
            By joining a GDSC, students grow their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and
            their community.
          </Ctext>
        </Circle>
      </Cwrapper>
    </LeftWrapper>
    <Events />
  </Page>
);

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      bool: window.innerWidth < 1200,
    };
  }
  render() {
    window.addEventListener("resize", () => {
      if ( (window.innerWidth < 1200) !== this.state.bool) {
        this.setState({ width: window.innerWidth, bool: !this.state.bool });
      }
    });
    if (this.state.width < 1200) {
      return Multi;
    } else {
      return Single;
    }
  }
}

function Events(props) {
  return (
    <RightWrapper>
      Expect these from us
      <Ecardswrapper>
        <ECard borderTopLeft="0" color="red">
          Workshops
        </ECard>
        <ECard borderTopRight="0" color="green">
          Bootcamps
        </ECard>
        <ECard borderBottomLeft="0" color="blue">
          Tech Talks
        </ECard>
        <ECard borderBottomRight="0" color="yellow">
          DSC Solution Challenge
        </ECard>
      </Ecardswrapper>
    </RightWrapper>
  );
}

export default About;
