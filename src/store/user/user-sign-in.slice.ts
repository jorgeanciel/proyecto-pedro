import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exception } from "../../utils/errors/custom-errors";
import { TUserLogInParams } from "../../types/user/user.interface";

export type UserSignInState = {
  error: Exception | any;
  loading: boolean;
  success: boolean;
  userAccess: TUserLogInParams;
};

const initialState: UserSignInState = {
  error: null,
  loading: false,
  success: false,
  userAccess: {
    user: "",
    password: "",
  },
};

export const userSignInUserSlice = createSlice({
  name: "user-sign-in",
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
    reset: () => {
      return initialState;
    },

    resolved: (state, action: PayloadAction<TUserLogInParams>) => {
      return {
        ...state,
        error: null,
        loading: false,
        success: true,
        userAccess: action.payload,
      };
    },
  },
});

export default userSignInUserSlice.reducer;

export const { pending, failed, reset, resolved } = userSignInUserSlice.actions;
