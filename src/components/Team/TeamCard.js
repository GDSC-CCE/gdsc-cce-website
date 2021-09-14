import { GitHub, LinkedIn } from "@material-ui/icons";
import styled from "styled-components";
import { useTheme } from "styled-components";

const Flipcard = styled.div`
  background-color: ${(props) => props.theme.bg};
  width: 180px;
  height: 250px;
  perspective: 1000px; 
  padding: 1px;
  margin: 20px;
  
  @media (max-width: 450px) {
    margin-left: auto;
    margin-right: auto;
    
  }

`;
const FlipCardInner = styled.div`
  position: relative;
  border: 2px solid ${(props) => props.theme.text};
  background-color: inherit;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  :hover {
    transform: rotateY(180deg);
  }
`;
const FlipCardFront = styled.div`
  position: absolute;
  width: 95%;
  margin: auto;
  height: 95%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const FlipCardBack = styled.div`
  background-color: inherit;
  position: absolute;
  transform: rotateY(180deg);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  margin: auto;
  height: 95%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-self: stretch;
  flex: 1.5;
  padding: 5px;
  color: ${(props) => props.theme.text};
`;
const Name = styled.p`
  font-weight: 500;
  margin: 5px 0;
`;
const Role = styled.p`
  font-size: 14px;
`;
const Avatar = styled.img`

max-width:150px;
      max-height: 270px;
      height: 95%;
      width: 95%;
      height: 150px;
      width: 150px;
      border-radius: 10px;
      object-fit: cover;
      margin-top: 3px;
`;

function TeamCard(props) {
  const theme= useTheme();
  return (
    <Flipcard>
      <FlipCardInner>
        <FlipCardFront>
          <Avatar src={props.avatar} alt="Avatar" class="avatar" />
          <TextContainer>
            <Name>{props.name}</Name>
            <Role>{props.role}</Role>
          </TextContainer>
        </FlipCardFront>
        <FlipCardBack>
          <a href={props.g} target="_blank" rel="noreferrer"><GitHub style={{color: theme.text}}></GitHub></a>
          <a href={props.l} target="_blank" rel="noreferrer"><LinkedIn style={{color: theme.text}} /></a>
        </FlipCardBack>
      </FlipCardInner>
    </Flipcard>
  );
}

export default TeamCard;
