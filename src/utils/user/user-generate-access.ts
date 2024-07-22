import { TSignInUserParamsDto } from "../../types/user/user.interface";

const userGenerateAccess = (signInParams: TSignInUserParamsDto) => {
  const generateUser = `${signInParams.firstName.charAt(0)}${
    signInParams.lastName.split(" ")[0]
  }`;

  const generatePass = `${signInParams.firstName.charAt(0)}${
    signInParams.lastName.split(" ")[0]
  }`;

  return {
    user: generateUser,
    password: generatePass,
  };
};

export default userGenerateAccess;
