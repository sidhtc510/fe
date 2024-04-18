import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: []
};

export const fetchUsers = createAsyncThunk(
"users/fetchUsers", 
async () => {
    const resp = await fetch("https://api.escuelajs.co/api/v1/users?limit=10");
    const data = await resp.json();
    return data;
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.status = "ready";
                state.list = payload
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = "rejected";
            });
    },
});

// export const { remove } = usersSlice.actions;

export default usersSlice.reducer;