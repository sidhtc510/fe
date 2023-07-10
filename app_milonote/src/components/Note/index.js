import { forwardRef, useRef, useState } from "react";
import { ResizeButton, Wrapper } from "./Styled/Wrapper";
import { useDrag } from "../../hooks/useDrag";
import { useDispatch } from "react-redux";
import { changeSize } from "../../store/slices/notes";

export const Note = forwardRef(({ top, left, width, height, id }, ref) => {
  const dispatch = useDispatch();
  const {
    noteRef: resizeRef, 
    onMouseDown,
    noteState: resizeState,
  } = useDrag({
    onMouseMoveCallback: ({ x, y }) => {
      const boundingRect = noteRef.current.getBoundingClientRect();
      const width = Math.max(200, x - boundingRect.x);
      const height = Math.max(40, y - boundingRect.y);
      noteRef.current.style.width = `${width}px`;
      noteRef.current.style.height = `${height}px`;
    },
    onMouseUpCallback: ({ pageX, pageY}) => {
      const boundingRect = noteRef.current.getBoundingClientRect();
      const width = Math.max(200, pageX - boundingRect.x);
      const height = Math.max(40, pageY - boundingRect.y);
      dispatch(changeSize({ id, width, height }));
    }
  });

  const noteRef = useRef();
  const [ isEdiable, setIsEditable ] = useState(false);

  const onDblClick = () => {
    setIsEditable(true);
    const cancel = (evt) => {
      let target = evt.target;
      while (target) {
        if (target === noteRef.current) {
          return;
        }
        target = target.parentNode;
      }
      setIsEditable(false);
      document.removeEventListener("click", cancel);
    }
    document.addEventListener("click", cancel);
  }
  
  return (
    <Wrapper 
      ref={ref ?? noteRef} 
      top={top} 
      left={left}
      width={width}
      height={height}
      contentEditable={isEdiable}
      onDoubleClick={onDblClick}
    >
      Insert text here!&nbsp;{id}
      {!resizeState.isVisible && <ResizeButton
        onMouseDown={onMouseDown}
        top={height - 17}
        left={width - 17}
      />}
      
      {resizeState.isVisible && <ResizeButton
        position="fixed"
        top={resizeState.top}
        left={resizeState.left}
        ref={resizeRef}
        visibility={resizeState.isVisible}
      />}
      
    </Wrapper>
  );
});
