import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const notesSlice = createSlice({
    name: "notes",
    initialState: initialState,
    reducers: {
        addNote: (state, action) => {
            const { top, left, text, width, height, id } = action.payload;
            
            if (state.items.find(el => el.id === id)) {
                return;
            }

            state.items.push({
                id: id ?? +Date.now(),
                top,
                left,
                text: text ?? "",
                width: width ?? 200,
                height: height ?? 40,
            });
        },
        changeId: (state, action) => {
            const { id, newId } = action.payload;
            state.items = state.items.map((item) => {
                if (item.id !== id) {
                    return item;
                }
                return {
                    ...item,
                    id: newId,
                };
            });
        },
        deleteNote: (state, action) => {

        },
        changeSize: (state, action) => {
            const { id, width, height } = action.payload;
            state.items = state.items.map((item) => {
                if (item.id !== id) {
                    return item;
                }
                return {
                    ...item,
                    width,
                    height,
                };
            });
        }
    }
});

export const {
    addNote, deleteNote, changeSize, changeId,
}  = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
