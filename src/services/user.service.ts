import { IUserRepository } from "../repositories/user/user.repository";
import { ApiUserImpl } from "../repositories/user/user.impl";
import {
  TUserDto,
  TUserLogInParams,
  TSignInUserParamsDto,
} from "../types/user/user.interface";

export class UserServices implements IUserRepository {
  private apiUserImpl: ApiUserImpl;
  constructor() {
    this.apiUserImpl = new ApiUserImpl();
  }

  async logInUser(userLogInParams: TUserLogInParams): Promise<TUserDto> {
    return await this.apiUserImpl.logInUser(userLogInParams);
  }

  async signInUser(userSignInParams: TSignInUserParamsDto): Promise<void> {
    return await this.apiUserImpl.signInUser(userSignInParams);
  }

  async saveLocalStorageUser(user: TUserDto): Promise<void> {
    return await this.apiUserImpl.saveLocalStorageUser(user);
  }
}
