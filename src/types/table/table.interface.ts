import { DocumentData, QuerySnapshot } from "firebase/firestore";

export type TTableStatusDto =
  | "active"
  | "pending"
  | "inactive"
  | "kitchen"
  | "bar"
  | "inProgress"
  | "reserved"
  | "other";

export interface TTableDto {
  key: string;
  name: string;
  status: TTableStatusDto;
}

export const transformTableModelToTableDto = (
  userSnapshot: QuerySnapshot<DocumentData, DocumentData>
): TTableDto[] => {
  let tableDto = [] as TTableDto[];
  userSnapshot.forEach((doc) => {
    const table = doc.data();
    tableDto.push({
      key: doc.id,
      name: table.name,
      status: table.status,
    });
  });

  return tableDto;
};
