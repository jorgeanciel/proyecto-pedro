import {
  TUserDto,
  TSignInUserParamsDto,
  TUserLogInParams,
} from "../../types/user/user.interface";

export interface IUserRepository {
  logInUser(userSignInParams: TUserLogInParams): Promise<TUserDto>;
  signInUser(signInUserParams: TSignInUserParamsDto): Promise<void>;
  saveLocalStorageUser(userDto: TUserDto): Promise<void>;
}
