import { UserServices } from "../../services/user.service";
import { UserLogInState } from "../../store/user/user-log-in.slice";
import { useUserLogInActions } from "../actions/user/user-log-in.actions";
import { useAppSelector } from "../use-storage";

type UseLogInUserState = {
  onLogIn: (user: string, password: string) => void;
  onReset: () => void;
  state: UserLogInState;
};
const useLogInUser = (): UseLogInUserState => {
  const userServies = new UserServices();
  const userState = useAppSelector((state) => state.userLogIn);

  const { handlerResolved, handlerPending, handlerFailed, handlerReset } =
    useUserLogInActions();

  const onLogIn = async (user: string, password: string) => {
    handlerPending();
    try {
      const userModelDto = await userServies.logInUser({
        user,
        password,
      });
      if (userModelDto) await userServies.saveLocalStorageUser(userModelDto);
      return handlerResolved();
    } catch (error) {
      return handlerFailed(error);
    }
  };

  return {
    onLogIn,
    onReset: handlerReset,
    state: userState,
  };
};

export default useLogInUser;
