import styled from "@emotion/styled";

export const Button = styled.div`
  cursor: pointer;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 10px;
  background-size: auto 25px;
  background-position: center 10px;
  background-repeat: no-repeat;
  background-image: url("${(props) => props.background}");
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: translate3d(5px, 0, 0);
  }
`;
