import styled from "styled-components";
import TimePill from "../../elements/Pill";
import { useLayoutEffect } from "react";

const Card = styled.div`
  margin: 0 10px;
  margin-top: 50px;
  height: min-content;
  width: 274px;
  padding: 10px;

  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.text};
  border-color: ${(props) => props.theme[`${props.color}Alt`]};


  background-color: ${(props) => props.theme.elevatedbg};

  display: inline-grid;
  grid-row-gap: 10px;

  cursor: pointer;

  position: relative;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
`;

const Img = styled.img`
  height: 200px;
  width: 250px;
  border-radius: 10px;
`;
const Title = styled.h3`
  font-weight: 400;
  margin-top: 10px;
  color: ${(props) => props.theme.text};
`;
const Description = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.textAlt};
  min-height: 70px;
`;
const ButtonAlt = styled.a`
  margin: 10px;
  padding: 10px 20px;
  color: ${(props) => props.theme[props.color]};
  border-radius: 5px;
  background-color: ${(props) => props.theme.isDark? props.theme.bg: props.theme[`${props.color}Alt`]};
  border: 1px solid ${props => props.theme.isDark? props.theme[props.color] : "white"};
  :hover {
    transform: scale(1.1);
  }
  justify-self: center;
`;

function Event(props) {
  useLayoutEffect(() => {
    document.querySelector("main").scrollTo(0, 0);
  });

  return (
    <Card>
      <TimePill>{props.time}</TimePill>
      <Img src={props.image} alt="event image"></Img>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <ButtonAlt
        href={props.link}
        target="_blank"
        rel="noreferrer"
        color={props.color}
      >
        Join Now
      </ButtonAlt>
    </Card>
  );
}
export default Event;
