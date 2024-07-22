export type TRoles = "admin" | "user" | "bartender" | "kitchen" | "";
export type TGender = "male" | "female";

export enum EUserState {
  ACTIVE = 1,
  INACTIVE = 0,
}

type TLevel = "basic" | "premiun" | "gold" | "platinum" | "vip";
type TInternalStatus =
  | "logged"
  | "unlogged"
  | "online-table"
  | "singing"
  | "waiting"
  | "calling";

export interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
  document: string;
  role?: TRoles;
  phone: string;
  address: string;
  gender: TGender;
  state?: EUserState;
  user?: string;
  password?: string;
  ubication: string;
  visits: number;
  dateLastVisit: string | Date;
  level: TLevel;
  followers: number;
  internalStatus: TInternalStatus;
}
