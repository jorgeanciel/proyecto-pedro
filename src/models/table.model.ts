export type TTableStatus =
  | "active"
  | "pending"
  | "inactive"
  | "kitchen"
  | "bar"
  | "inProgress"
  | "singing"
  | "reserved"
  | "other";

export interface TableModel {
  key: string;
  name: string;
  status: TTableStatus;
}
