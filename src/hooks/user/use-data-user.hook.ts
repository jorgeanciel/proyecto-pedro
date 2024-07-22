import { TUserDto } from "../../types/user/user.interface";

const useDataUser = () => {
  const validateIfExistLogIn = () => {
    const user = localStorage.getItem("user");
    return !!user;
  };
  const getDataUserLocalstorage = () => {
    const user = localStorage.getItem("user");
    if (!user) return null;

    return JSON.parse(user) as TUserDto;
  };
  const logOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return {
    validateIfExistLogIn,
    userData: getDataUserLocalstorage() as TUserDto,
    logOut,
  };
};

export default useDataUser;
