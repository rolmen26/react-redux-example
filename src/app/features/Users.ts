import { createSlice } from "@reduxjs/toolkit";
import { Users } from '../types/Users'
import { fetchUsers } from "../data/FakeData";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: false,
        data: [] as Users[],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.isError = true;
        });
    },
    reducers: {
        addUser: (state, action) => {
            state.data = state.data.concat(action.payload);
        },

        deleteUser: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload.id);
        },

        updateUsername: (state, action) => {
            state.data.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            })
        }
    },
});


export const { addUser, deleteUser, updateUsername } = usersSlice.actions;
export default usersSlice.reducer;
