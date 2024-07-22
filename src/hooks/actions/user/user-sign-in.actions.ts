import {
  pending,
  failed,
  reset,
  resolved,
} from "../../../store/user/user-sign-in.slice";
import { TUserLogInParams } from "../../../types/user/user.interface";
import { useAppDispatch } from "../../use-storage";

export const useUserSignInActions = () => {
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

  const handlerResolved = (userAccess: TUserLogInParams) => {
    dispatch(resolved(userAccess));
  };

  return {
    handlerPending,
    handlerFailed,
    handlerReset,
    handlerResolved,
  };
};
