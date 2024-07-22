import React, { useEffect } from "react";
import Login from "../components/templates/login/login";
import { useNavigate } from "react-router-dom";
import useSignInUser from "../hooks/user/use-log-in-user.hook";

const SingInContainer: React.FC = () => {
  const {
    onLogIn,
    state: { loading, success, error },
    onReset,
  } = useSignInUser();
  const navigate = useNavigate();

  const handleLogIn = async (user: string, password: string) => {
    onLogIn(user, password);
  };
  const handlerRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (success) {
      navigate("/home");
    }
  }, [success]);

  useEffect(() => {
    return () => {
      onReset();
    };
  }, []);

  return (
    <Login
      onClickSingIn={handleLogIn}
      onClickRegister={handlerRegister}
      isLoading={loading}
      isError={error}
    />
  );
};

export default SingInContainer;
