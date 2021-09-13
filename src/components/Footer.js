import Page from "../elements/Page";
import styled from "styled-components";
import { Twitter,LinkedIn, GitHub, YouTube, Instagram } from "@material-ui/icons";

const Fdiv = styled.footer`
    height: 40%;
    width: 100vw;

    display: flex;
    flex-direction: column;
    border-start-start-radius: 10px;
    background-color: #272732;
    
    position: absolute;
    bottom: 0;

`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    
`;

const FBdiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Footer(props) {
    return (
        <Page>
            <Fdiv>
                <Icons>
                    
                    <Twitter />
                    <GitHub />
                    <LinkedIn />
                    <YouTube />

                </Icons>
                <FBdiv></FBdiv>
            </Fdiv>
        </Page>
    );
}

export default Footer;
