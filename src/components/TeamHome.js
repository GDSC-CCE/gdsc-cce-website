import styled, { useTheme } from "styled-components";
import Button from "../elements/Button";
import teamimage from "../images/team.svg";
import { Link } from "react-router-dom";
import Page from "../elements/Page";

const MContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 80px;
  scroll-snap-align: start;
  @media (max-width: 1050px) {
    padding-top: 0;
  }
  min-height: 650px;
  scroll-behavior: smooth;
`;

const Container = styled(Page)`
    flex-direction: column;
    justify-content: space-evenly;
`;

const TeamImg = styled.img`
  max-width: 500px;
  width: 90vw;
  height: auto;
`;
function Team(props) {
  const theme = useTheme();
  console.log(theme);
  return (
    <Container id="teamhome">
      <TeamImg src={teamimage} alt="team-illustration" />
      <Link to="/team" style={{ textDecoration: "none" }}>
        <Button
          hovercolor={theme.text}
          hovertextcolor={theme.bg}
          style={{ width: "110px" }}
        >
          Our Team >
        </Button>
      </Link>
    </Container>
  );
}

export default Team;
