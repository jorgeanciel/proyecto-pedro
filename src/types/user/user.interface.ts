import { DocumentData, QuerySnapshot } from "firebase/firestore";
import {
  EUserState,
  TGender,
  TRoles,
  UserModel,
} from "../../models/user.model";

export type TUserLogInParams = {
  user: string;
  password: string;
};

export interface TSignInUserParamsDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  gender: TGender;
}

export enum EUserStateDto {
  ACTIVE = 1,
  INACTIVE = 0,
}

export type TLevelDto = "basic" | "premiun" | "gold" | "platinum" | "vip";
export type TInternalStatusDto =
  | "logged"
  | "unlogged"
  | "online-table"
  | "singing"
  | "waiting"
  | "calling";
export interface TUserDto {
  key: string;
  firstName: string;
  lastName: string;
  email: string;
  document: string;
  role: TRoles;
  phone: string;
  address: string;
  gender: TGender;
  state: EUserStateDto;
  ubication: string;
  visits: number;
  dateLastVisit: string | Date;
  level: TLevelDto;
  followers: number;
  internalStatus: TInternalStatusDto;
}

export const transformUserModelToUserDto = (
  userSnapshot: QuerySnapshot<DocumentData, DocumentData>
): TUserDto => {
  let userDtoResponse = {} as TUserDto;
  userSnapshot.forEach((doc) => {
    const user = doc.data();
    userDtoResponse = {
      key: doc.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      document: user.document,
      role: user.role,
      phone: user.phone,
      address: user.address,
      gender: user.gender,
      state: user.state,
      ubication: user.ubication,
      visits: user.visits,
      dateLastVisit: user.dateLastVisit,
      level: user.level,
      followers: user.followers,
      internalStatus: user.internalStatus,
    } as TUserDto;
  });

  return userDtoResponse;
};

export const transformUserParamsDtoToUserModel = (
  userSaveParams: TSignInUserParamsDto
): UserModel => {
  let userModel = {} as UserModel;
  const { firstName, lastName, email, phone, address, gender } = userSaveParams;

  const user = `${userSaveParams.firstName.charAt(0)}${
    userSaveParams.lastName.split(" ")[0]
  }`;
  userModel = {
    firstName,
    lastName,
    email,
    phone,
    address,
    gender,
    state: EUserState.ACTIVE,
    document: "11111111",
    role: "user",
    user,
    password: user,
    ubication: "Lima - Peru",
    visits: 1,
    dateLastVisit: "",
    level: "basic",
    followers: 0,
    internalStatus: "unlogged",
  };
  return userModel;
};
