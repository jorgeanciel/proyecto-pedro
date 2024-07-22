import { DocumentData, Query } from "firebase/firestore";

export interface ITableRepository {
  getTablesQuery(): Query<DocumentData, DocumentData>;
  changeStatusByKey(key: string, status: string): Promise<void>;
}
