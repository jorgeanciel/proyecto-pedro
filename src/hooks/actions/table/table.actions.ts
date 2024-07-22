import {
  pending,
  failed,
  reset,
  resolved,
} from "../../../store/table/table.slice";
import { TTableDto } from "../../../types/table/table.interface";
import { useAppDispatch } from "../../use-storage";

export const useTableActions = () => {
  const dispatch = useAppDispatch();

  const handlerPending = () => {
    dispatch(pending());
  };

  const handlerFailed = (error: any) => {
    dispatch(failed(error));
  };

  const handlerReset = () => {
    dispatch(reset());
  };

  const handlerResolved = (tables: TTableDto[]) => {
    dispatch(resolved(tables));
  };

  return {
    handlerPending,
    handlerFailed,
    handlerReset,
    handlerResolved,
  };
};
