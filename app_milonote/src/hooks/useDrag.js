import { useEffect, useRef, useState } from "react";

/*
  return a?.b
  
  =======

  if (a === undefined || a === null) {
    return undefined;
  } else {
    return a.b;
  }
*/

export const useDrag = ({ 
  onMouseUpCallback, 
  onMouseMoveCallback,
  xOffset, 
  yOffset 
}) => {
  const [noteState, setNoteState] = useState({
    isVisible: false,
    top: 0,
    left: 0,
  });
  const noteRef = useRef(null);
  const offsetRef = useRef({ xOffset, yOffset });

  const onMouseDown = (evt) => {
    const { pageX, pageY } = evt;
    const { 
      x,
      y 
    } = evt.target.getBoundingClientRect() ?? { x: 0, y:0 };

    offsetRef.current.yOffset = yOffset ?? (pageY - y);
    offsetRef.current.xOffset = xOffset ?? (pageX - x);

    setNoteState({
      isVisible: true,
      top: pageY - offsetRef.current.yOffset,
      left: pageX - offsetRef.current.xOffset,
    });

    console.log({
      isVisible: true,
      top: pageY - offsetRef.current.yOffset,
      left: pageX - offsetRef.current.xOffset,
    });
  };
  const onMouseUp = (evt) => {
    if (!noteState.isVisible) {
      return;
    }

    setNoteState({
      isVisible: false,
      top: 0,
      left: 0,
    });

    onMouseUpCallback?.(evt);
  };
  const onMouseMove = (evt) => {
    if (!noteState.isVisible) {
      return;
    }

    const { pageX, pageY } = evt;

    const x = pageX - offsetRef.current.xOffset;
    const y = pageY - offsetRef.current.yOffset;

    noteRef.current.style.top = `${y}px`;
    noteRef.current.style.left = `${x}px`;
  
    onMouseMoveCallback?.({
      x, y
    })
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseUp, onMouseMove]);

  return { onMouseDown, noteRef, noteState };
};
