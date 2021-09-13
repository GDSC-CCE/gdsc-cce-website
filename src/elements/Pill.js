import styled from "styled-components";

const Pill = styled.div`
  border-radius: 30px;

  height: 30px;
  width: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.bg};
`;
const Line = styled.div`
  background-color: ${(props) => props.theme.text};
  height: 20px;
  width: 5px;
`;
const TP = styled.div`
  position: absolute;
  left: 50%;
  top: -50px;
  margin-left: -75px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function TimePill(props) {
  return (
    <TP>
      <Pill>{props.children}</Pill>
      <Line />
    </TP>
  );
}

export default TimePill;
