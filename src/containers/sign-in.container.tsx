import FormRegisterLogin, {
  FormRegisterUserValues,
} from "../components/templates/register-user/form-register-user";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import { useNavigate } from "react-router-dom";
import SuccessRegisterUser from "../components/templates/register-user/sucess-register-user";
import { TSignInUserParamsDto } from "../types/user/user.interface";
import useSignInUser from "../hooks/user/use-sign-in-user.hook";
import useLogInUser from "../hooks/user/use-log-in-user.hook";
import { useEffect } from "react";

const SignInUserContainer: React.FC = () => {
  const {
    onSignIn,
    state: { loading: signInLoading, success: signInSuccess, userAccess },
    onReset: onResetSignIn,
  } = useSignInUser();

  const {
    onLogIn,
    state: { loading: logInLoading, success: logInSucess },
    onReset: onResetLogIn,
  } = useLogInUser();

  const navigate = useNavigate();

  const handleOnSubmit = async (values: FormRegisterUserValues) => {
    const userRequest: TSignInUserParamsDto = {
      ...values,
    };
    onSignIn(userRequest);
  };

  const handleGoToBack = () => {
    navigate(-1);
  };

  const handlerOnSignIn = async () => {
    onLogIn(userAccess.user, userAccess.password);
  };

  useEffect(() => {
    if (logInSucess) {
      navigate("/home");
    }
  }, [logInSucess]);

  useEffect(() => {
    return () => {
      onResetSignIn();
      onResetLogIn();
    };
  }, []);

  if (signInSuccess) {
    return (
      <SuccessRegisterUser
        onSignIn={handlerOnSignIn}
        isLoading={logInLoading}
      />
    );
  }

  return (
    <div className="pt-10 px-5">
      <header>
        <TextIcon
          family="bold"
          iconSize="30"
          icon="back"
          label="Usuario"
          labelColor="text-gray-700"
          variant="subtitle"
          styles="gap-7"
          iconColor={myColors["danger-light"]}
          onClickIcon={handleGoToBack}
        />
      </header>
      <main className="pt-10 px-4">
        <FormRegisterLogin
          onSubmit={handleOnSubmit}
          isLoading={signInLoading}
        />
      </main>
    </div>
  );
};

export default SignInUserContainer;
