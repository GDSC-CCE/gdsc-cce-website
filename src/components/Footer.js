import CPage from "../elements/Page";
import styled from "styled-components";
import { Copyright, Twitter,LinkedIn, GitHub, YouTube, Instagram } from "@material-ui/icons";
import Button from "../elements/Button";

const Page=styled(CPage)`
    padding:0;
`;

const Fdiv = styled.footer`
    height: 40vh;
    width: 100vw;

    display: flex;
    flex-direction: column;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #1c1c1c;
    
    position: absolute;
    bottom: 0;

`;

const Icons = styled.div`
    flex:2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 10px;

    font-size: 80px;
    @media(max-width:600px) {
        font-size:50px;
    }
    color: #5c5c5c;

`;

const CTwitter= styled(Twitter)`
    cursor: pointer;
    :hover {
        color: #1da1f2;
    }
`; 
const CGitHub= styled(GitHub)`
    cursor: pointer;
    :hover {
        color: white;
    }
`; 
const CLinkedIn= styled(LinkedIn)`
    cursor: pointer;
    :hover {
        color: #2867b2;
    }
`; 
const CYouTube = styled(YouTube)`
    cursor: pointer;
    :hover {
        color: #ff0000;
    }
`;
const CInstagram= styled(Instagram)`
    cursor: pointer;
    :hover {
        color: #e1306c;
    }
`; 



const FBdiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
`;

const CopyText = styled.div`
    margin: 5px;
`;

const Topdiv=styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    padding-bottom: 50vh;
    padding-top: 80px;
`;

const JoinText = styled.p`
    display: block;
    font-size: 45px;
    margin: 20px 0;
    color: ${props => props.theme.text};
`;

function Footer(props) {
    return (
        <Page>
            <Topdiv> 
                <JoinText>Shall we Start ? </JoinText>
                <Button to={{ pathname: "https://www.google.com" }} target="_blank" hovercolor="black">Join Us</Button>
            </Topdiv>
            <Fdiv>
                <Icons >
                    
                    <CTwitter  fontSize="inherit"/>
                    <CInstagram fontSize="inherit" />
                    <CGitHub fontSize="inherit" />
                    <CLinkedIn  fontSize="inherit" />
                    <CYouTube  fontSize="inherit" />

                </Icons>
                <FBdiv>
                    <Copyright color="white"/>
                    <CopyText>2021 GDSC CCE. All rights reserved.</CopyText>
                </FBdiv>
            </Fdiv>
        </Page>
    );
}

export default Footer;