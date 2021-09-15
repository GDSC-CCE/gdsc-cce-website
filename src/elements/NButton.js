import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";

const CButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 45px;

  border: ${(props) => props.border} solid 1px;
  border-radius: 5px;

  margin: 10px;

  cursor: pointer;
  text-decoration: none;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  :hover {
    background-color: ${(props) => props.hovercolor};
    border-color: ${(props) => props.hovercolor};
    color: ${(props) => props.hovertextcolor};
    ${(props) => {
      return props.active === "true" ? "transform: scale(1.05);" : null;
    }};
  }
`;

function Button(props) {
  const theme = useContext(ThemeContext);
  const active = "active" in props;
  const mytheme = {
    bg: active ? props.hovercolor : theme.bg,
    color: active ? props.hovertextcolor || "white" : theme.text,
    border: active ? props.hovercolor : theme.text,
    hovercolor: props.hovercolor || theme.text,
    hovertextcolor:
      props.hovercolor === undefined
        ? theme.text === "white"
          ? "black"
          : "white"
        : "white",
  };

  return (
    <CButton
      href={props.href}
      target={props.target}
      to={props.to}
      bg={mytheme.bg}
      color={mytheme.color}
      border={mytheme.border}
      hovercolor={mytheme.hovercolor}
      hovertextcolor={mytheme.hovertextcolor}
      active={active ? "true" : "false"}
      onClick={props.onClick}
    >
      {props.children}
    </CButton>
  );
}

export default Button;
