import Page from "../elements/Page";
import styled, {useTheme} from "styled-components";
import Tagline from "../elements/Tagline";
import classlogo from "../images/class.svg";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Container= styled(Page)`
    position: relative;
`;

const TopSection = styled.div`
    width: 100%;
    height: min-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-space-around;
    margin-bottom: 50px;
    position: relative;
    bottom:30px;
    @media (max-width: 1050px) {
        margin-bottom: 100px;
    };
    
`;
const RightWrapper = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    width:60%;
    min-width: 250px;
    height: auto;
    @media (max-width: 1050px) {
        max-width: 300px;
        margin-top: 50px;
    }
    `;
const LeftWrapper =styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    margin-bottom: 30px;
 
    @media (max-width: 850px) {
        margin-left:10px;
        align-items: center;
    }
`;

const Heading = styled.h1`
    font-weight: normal;
    color: ${props => props.theme.text};
    font-size: 45px;

    @media (max-width: 1400px) {
        font-size: 40px;
    }
    @media (max-width: 1050px) {
        font-size: 4vw;
    }
    @media (max-width: 650px) {
        font-size: 5.5vw;
        font-weight: 500;
    }
`;

const College = styled.h2`
    color: ${props => props.theme.textAlt};
    margin-top: 20px;
    font-weight: normal;
    font-size: 30px;

    @media (max-width: 650px) {
        font-size: 4.5vw;
    }
`;
const BottomWrapper = styled.a`
    margin-left: auto;
    margin-right: auto;
    width: min-content;
    display: flex;
    text-decoration: none;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    bottom: 50px;
    left:0;
    right:0;
    -webkit-tap-highlight-color: transparent;

    margin: 10px 0;
    :focus {
        outline:none;
    }
 `;

function Home(props) {
    const theme = useTheme();
    return (
        <Container id="home">
            <TopSection>
                <LeftWrapper>
                    <Heading>Google Developers Student Clubs</Heading>
                    <College>Christ College of Engineering</College>
                </LeftWrapper>
                <RightWrapper src={classlogo} alt="online class image" />
            </TopSection>
            <BottomWrapper href="#about">
                <Tagline />
                <ExpandMoreIcon style={{alignSelf:"center",color:theme.text }} />
            </BottomWrapper>
        </Container>
    );
}

export default Home;