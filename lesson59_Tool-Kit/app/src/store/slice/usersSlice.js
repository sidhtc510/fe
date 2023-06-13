import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/users";

const initialState = {
    list: users,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const resp = await fetch("https://reqres.in/api/users");
    const data = await resp.json();
    return data;
});

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        remove(state, action) {
            state.list = state.list.filter(({ id }) => id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload.data.map(
                    ({ id, first_name, last_name }) => ({
                        id,
                        name: first_name,
                        lastname: last_name,
                        age: 444,
                    })
                );
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

export const { remove } = usersSlice.actions;

export default usersSlice.reducer;
