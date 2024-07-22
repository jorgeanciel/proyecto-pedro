import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exception } from "../../utils/errors/custom-errors";
import { TTableDto } from "../../types/table/table.interface";

export type TableState = {
  error: Exception | any;
  loading: boolean;
  success: boolean;
  tables: TTableDto[];
};

const initialState: TableState = {
  error: null,
  loading: false,
  success: false,
  tables: [],
};

export const useTableSlice = createSlice({
  name: "tables",
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
        // success: false,
      };
    },
    reset: () => {
      return initialState;
    },

    resolved: (state, action: PayloadAction<TTableDto[]>) => {
      return {
        ...state,
        error: null,
        loading: false,
        success: true,
        tables: action.payload,
      };
    },
  },
});

export default useTableSlice.reducer;

export const { pending, failed, reset, resolved } = useTableSlice.actions;
