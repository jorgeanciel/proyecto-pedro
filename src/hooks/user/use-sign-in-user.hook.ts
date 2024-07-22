import { UserServices } from "../../services/user.service";
import { UserSignInState } from "../../store/user/user-sign-in.slice";
import { TSignInUserParamsDto } from "../../types/user/user.interface";
import userGenerateAccess from "../../utils/user/user-generate-access";
import { useUserSignInActions } from "../actions/user/user-sign-in.actions";
import { useAppSelector } from "../use-storage";

type UseSignInUserState = {
  onSignIn: (params: TSignInUserParamsDto) => void;
  onReset: () => void;
  state: UserSignInState;
};
const useSignInUser = (): UseSignInUserState => {
  const userServies = new UserServices();
  const userState = useAppSelector((state) => state.userSignIn);

  const { handlerPending, handlerFailed, handlerReset, handlerResolved } =
    useUserSignInActions();

  const onSignIn = async (signInParams: TSignInUserParamsDto) => {
    handlerPending();
    try {
      await userServies.signInUser(signInParams);

      const { user, password } = userGenerateAccess(signInParams);

      return handlerResolved({
        user,
        password,
      });
    } catch (error) {
      return handlerFailed(error);
    }
  };

  return {
    onSignIn,
    onReset: handlerReset,
    state: userState,
  };
};

export default useSignInUser;
