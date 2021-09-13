import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    background-color: ${props => props.theme.bg};

    width: 100vw;
    height: 100vh;

    padding-top: 80px;

    scroll-snap-align: start;

    position: relative;
`;