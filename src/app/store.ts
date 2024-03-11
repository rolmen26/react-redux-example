import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/Users";


const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;