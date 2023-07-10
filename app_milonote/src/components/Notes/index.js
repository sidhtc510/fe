import { useDispatch, useSelector } from "react-redux"
import { Note } from "../Note";
import { useGetCardsQuery } from "../../store/slices/api";
import { useEffect } from "react";
import { addNote } from "../../store/slices/notes";

export const Notes = () => {
    const notes = useSelector(state => state.notes.items);
    const { isLoading, data } = useGetCardsQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (data === undefined) {
            return;
        }
        data.forEach((note) => {
            dispatch(addNote({
                id: note._id,
                text: note.text,
                top: note.y,
                left: note.x,
                width: note.width,
                height: note.height,
            }));
        });
    }, [ data ]);

    if (isLoading) {
        return null;
    }

    return <>
        {notes.map(note => <Note
            key={note.id ?? note._id} 
            top={note.top} 
            left={note.left} 
            width={note.width}
            height={note.height}
            id={note.id ?? note._id}
        />)}
    </>;
}