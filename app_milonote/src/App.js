import styled from "@emotion/styled";
import { Canvas } from "./components/Canvas";
import { LeftBar } from "./components/LeftBar";
import { Note } from "./components/Note";
import { Notes } from "./components/Notes";
import { useDrag } from "./hooks/useDrag";
import { useDispatch } from "react-redux";
import { addNote, changeId } from "./store/slices/notes";
import { useCreateCardMutation } from "./store/slices/api";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export function App() {
  const idRef = useRef(-1);
  const dispatch = useDispatch();
  const [ createCard, creationResult ] = useCreateCardMutation();
  const { onMouseDown, noteRef, noteState } = useDrag({
    onMouseUpCallback: ({ pageX, pageY }) => {
      idRef.current = +Date.now();
      const newCard = {
        id: idRef.current,
        top: pageY - 20,
        left: pageX - 20,
        text: "Inser text here!",
        width: 200,
        height: 40
      };
      dispatch(addNote(newCard));
      createCard(newCard);
    },
    xOffset: 20,
    yOffset: 20,
  });

  useEffect(() => {
    if (creationResult.status === "fulfilled") {
      const { _id } = creationResult.data;
      dispatch(changeId({ 
        id: idRef.current, 
        newId: _id 
      }));
      creationResult.reset();
    }
  }, [ creationResult ]);

  return (
    <Wrapper>
      <Canvas>
        <LeftBar onButtonMouseDown={onMouseDown} />
        <Notes />
        {noteState.isVisible && (
          <Note 
            top={noteState.top} 
            left={noteState.left} 
            width={200}
            height={40}
            ref={noteRef} 
          />
        )}
      </Canvas>
    </Wrapper>
  );
}
