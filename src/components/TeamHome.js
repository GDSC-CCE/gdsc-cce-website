import styled, { useTheme } from "styled-components";
import Button from "../elements/Button";
import teamimage from "../images/team.svg";
import { Link } from "react-router-dom";
import Page from "../elements/Page";


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
          to="/team"
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
