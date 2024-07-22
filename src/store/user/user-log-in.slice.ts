import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exception } from "../../utils/errors/custom-errors";

export type UserLogInState = {
  error: Exception | any;
  loading: boolean;
  success: boolean;
};

const initialState: UserLogInState = {
  error: null,
  loading: false,
  success: false,
};

export const userLogInSlice = createSlice({
  name: "user-log-in",
  initialState,
  reducers: {
    pending: () => {
      return {
        ...initialState,
        loading: true,
        success: false,
      };
    },
    failed: (state, action: PayloadAction<Exception | any>) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    },
    reset: (state) => {
      return {
        ...state,
        error: null,
        loading: false,
        success: false,
      };
    },
    resolved: (state) => {
      return {
        ...state,
        error: null,
        loading: false,
        success: true,
      };
    },
  },
});

export default userLogInSlice.reducer;

export const { pending, failed, reset, resolved } = userLogInSlice.actions;
