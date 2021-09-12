import styled from "styled-components";
export default styled.div`
    
  width: 90%;
  margin: 20px;
  height: 30px;
  position: relative;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;

    :after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 15px solid ${(props) => props.theme.bg};
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
    }
    :before {

        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 15px solid ${(props) => props.theme.bg};
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        transform: scaleX(-1);
    }

`;
