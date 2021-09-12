import styled from "styled-components";
import TechTeam from './TechTeam';
import { useLocation } from 'react-router';
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


function TeamHome(props) {


    const location = useLocation();
    // this is to scroll to top if path changes
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
      console.log('scrolling');
    }, [location.pathname]);

    return(
        <Container id="props.id">
<TechTeam />
        </Container>
    );
}

export default TeamHome;