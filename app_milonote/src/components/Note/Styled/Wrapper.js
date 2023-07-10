import styled from "@emotion/styled";
import ResizeIcon from "../assets/resize.png";

export const ResizeButton = styled.div`
  position: ${(props) => props.position ?? "absolute"};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: 15px;
  height: 15px;
  background-size: 15px;
  background-image: url("${ResizeIcon}");
  cursor: se-resize;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
`;

export const Wrapper = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  font-size: 16px;
  user-select: none;

  &:hover {
    ${ResizeButton} {
      opacity: 1;
    }
  }
`;

