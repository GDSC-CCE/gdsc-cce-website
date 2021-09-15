import styled from "styled-components";
import { useTheme } from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
const Span = styled.span`
  color: ${(props) => props.color};
  margin: 5px;
  font-size: 20px;
`;

function Tagline(props) {
  const theme = useTheme();
  return (
    <Wrapper>
      <Span color={theme.green}>Lets</Span>
      <Span color={theme.blue}>Learn</Span>
      <Span color={theme.red}>Together</Span>
    </Wrapper>
  );
}

export default Tagline;
