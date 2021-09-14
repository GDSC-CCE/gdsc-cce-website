import styled, {useTheme} from "styled-components";
import React from "react";
import logoimage from './images/navLogo.svg';
import logoimagedark from './images/navLogoDark.svg';

const LogoNoText= styled.img`
    width: 10vw;
    max-width: 80px;
    height: auto;
    display:flex;
    flex-shrink: 1;
    -webkit-tap-highlight-color: transparent;
`;
// const LogoHead =styled.h1`
//     font-size: 26px;
//     border: none;
//     font-weight: normal;
//     margin:10px;
//     color: ${props => props.theme.text};
//     opacity: .85;
//     margin-bottom: 5px;
//     @media (max-width: 1000px) {
//         font-size: 2.5vw;
//     }
//     @media (max-width: 650px) {
//         font-size: 16px;
//     }
// `;
// const LogoTail = styled.h2`
//     text-decoration: none;
//     font-weight:normal;
//     font-size: 18px;
//     margin:10px;
//     color: ${props => props.theme.textAlt};
//     margin-top: 0;
//     display:block;
//     @media (max-width: 1000px) {
//         font-size: 2vw;
//     }
//     @media (max-width: 650px) {
//         font-size: 14px;
//     }
// `;

const LogoContainer = styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`;
// const LogoText= styled.div`
//     text-decoration: none;
// `;

function Logo() {
    const dark=useTheme().isDark;
    return (
        <LogoContainer href="#home">
            <LogoNoText src={dark ? logoimagedark : logoimage} alt="logo"></LogoNoText> 
        </LogoContainer>
        
    );
}

export default Logo;