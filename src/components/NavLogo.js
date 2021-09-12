import styled from "styled-components";
import React from "react";
import logoimage from '../images/navLogo.svg';

const LogoNoText= styled.img`
    width: 10vw;
    max-width: 80px;
    height: auto;
    display:flex;
    flex-shrink: 1;
`;
const LogoHead =styled.h1`
    font-size: 26px;
    border: none;
    font-weight: normal;
    margin:10px;
    color: ${props => props.theme.text};
    opacity: .85;
    margin-bottom: 5px;
    @media (max-width: 1000px) {
        font-size: 2.5vw;
    }
    @media (max-width: 650px) {
        font-size: 16px;
    }
`;
const LogoTail = styled.h2`
    text-decoration: none;
    font-weight:normal;
    font-size: 18px;
    margin:10px;
    color: ${props => props.theme.textAlt};
    margin-top: 0;
    display:block;
    @media (max-width: 1000px) {
        font-size: 2vw;
    }
    @media (max-width: 650px) {
        font-size: 14px;
    }
`;
const LogoContainer = styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;
`;
const LogoText= styled.div`
    text-decoration: none;
`;
function Logo(props) {
    let head,tail='';
    // if(!props.isHome) {
    //     head= props.isMobile ? "GDSC CCE" : "Google Developer Student Clubs";
    //     tail= props.isMobile ? "" : "Christ College of Engineering";
    // }

    return (
        <LogoContainer href="#home">
            <LogoNoText src={logoimage} alt="logo"></LogoNoText> 
            <LogoText>
                <LogoHead>{head}</LogoHead>
                <LogoTail>{tail}</LogoTail>
            </LogoText>
        </LogoContainer>
        
    );
}

export default Logo;