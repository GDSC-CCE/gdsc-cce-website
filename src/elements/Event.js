import styled from "styled-components";
import TimePill from "./Pill";
const Card = styled.div`
    margin: 20px 0px;
    height: min-content;
    width: 274px;
    padding: 10px;

    border-radius: 10px;
    border: 2px solid ${props => props.theme.text};

    background-color: ${props => props.theme.elevatedbg};

    display:grid;
    grid-row-gap: 10px;

    cursor: pointer;

    position: relative;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  transition: 0.3s;
  :hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,.3);
  }
`;

const Img =styled.div`
    height: 200px;
    width: 250px;
    background-color:black;
    border-radius: 10px;

`;
const Title =styled.h3`
    font-weight: 400;
    margin-top: 10px;
    color: ${props => props.theme.text}
`;
const Description = styled.p`
    font-size: 14px;
    color: ${props => props.theme.textAlt}
`;
const ButtonAlt = styled.div`
    margin: 10px;
    padding: 10px 20px;
    color: ${props => props.theme[props.color]};
    border-radius: 5px;
    background-color: ${props => props.theme[`${props.color}Alt`] };
    :hover{
        transform: scale(1.1);
    }
    justify-self: center;
`;

function Event(props) {
    return(
        <Card>
            <TimePill>{props.time}</TimePill>
            <Img></Img>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <ButtonAlt color={props.color}>Join Now</ButtonAlt>
        </Card>
    );
}
export default Event;