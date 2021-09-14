import styled from "styled-components";
import TeamMembers from './TeamMembers';
import { useLayoutEffect } from 'react';


const Container = styled.div`
    min-height: 100vh;
    background-color: ${props => props.theme.bg};
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top:80px;
    min-height:650px;
`;


function Team(props) {


    // this is to scroll to top if path changes
    useLayoutEffect(() => {
      document.querySelector('main').scrollTo(0, 0);
      console.log('scrolling');
    }, );

    return(
        <Container id="team">
<TeamMembers />
        </Container>
    );
}

export default Team;