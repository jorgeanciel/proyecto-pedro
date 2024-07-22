import { configureStore } from "@reduxjs/toolkit";
import userLogInSlice from "./user/user-log-in.slice";
import userSignInUserSlice from "./user/user-sign-in.slice";
import useTableSlice from "./table/table.slice";

export const store = configureStore({
  reducer: {
    userLogIn: userLogInSlice,
    userSignIn: userSignInUserSlice,
    table: useTableSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
