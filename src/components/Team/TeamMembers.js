import styled from "styled-components";
import Banner from "../../elements/Banner";
import {
    Stars,
    Computer,
    Theaters,
    BusinessCenter,
    EmojiPeople,
} from "@material-ui/icons";
import { useTheme } from "styled-components";
import TeamCard from "./TeamCard";
import TeamData from "./TeamData";

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0px;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 0 0 auto;
  max-width: 900px;
`;

function getTeam(group) {
  let list = [];
  let person;
  for (let p of TeamData[group]) {
    person = <TeamCard name={p.name} avatar={p.avatar} role={p.role}/>;
    list.push(person);
  }
  return list;
}


function TeamMembers() {
  const theme = useTheme();
  let teamsections = [];
  const teambanner = {
    Leads:               [theme.text, Stars],
    "Tech Team":         [theme.blue, Computer],
    "Management Team":   [theme.green, BusinessCenter],
    "Media Team":        [theme.red, Theaters],
    "Outreach Team":     [theme.yellow, EmojiPeople],
  };
  const teams = [
    "Leads",
    "Tech Team",
    "Management Team",
    "Media Team",
    "Outreach Team",
  ];
  for (let team of teams) {
      let [color, Icon] = teambanner[team];
    teamsections.push(
      <TeamSection>
        <Banner style={{backgroundColor: color}}>
          <Icon style={{ color: theme.bg, marginRight: "5px" }} />
          <p style={{ color: theme.bg, fontWeight:"500" }}>{team}</p>
        </Banner>
        <TeamContainer>{getTeam(team)}</TeamContainer>
      </TeamSection>
    );
  }
  return teamsections;
}

export default TeamMembers;
