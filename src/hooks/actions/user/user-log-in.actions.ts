import {
  pending,
  failed,
  reset,
  resolved,
} from "../../../store/user/user-log-in.slice";
import { useAppDispatch } from "../../use-storage";

export const useUserLogInActions = () => {
  const dispatch = useAppDispatch();

  const handlerResolved = () => {
    dispatch(resolved());
  };

  const handlerPending = () => {
    dispatch(pending());
  };

  const handlerFailed = (error: any) => {
    dispatch(failed(error));
  };

  const handlerReset = () => {
    dispatch(reset());
  };

  return {
    handlerResolved,
    handlerPending,
    handlerFailed,
    handlerReset,
  };
};
