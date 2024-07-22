import { ITableRepository } from "./table.repository";
import db from "../../utils/firebase/firebase-config";
import {
  DocumentData,
  Query,
  collection,
  doc,
  query,
  updateDoc,
} from "firebase/firestore";

export class ApiTableImpl implements ITableRepository {
  private collectionTables;

  constructor() {
    this.collectionTables = collection(db, "Tables");
  }

  getTablesQuery(): Query<DocumentData, DocumentData> {
    try {
      const q = query(this.collectionTables);
      return q;
    } catch (error) {
      throw error;
    }
  }

  async changeStatusByKey(key: string, status: string): Promise<void> {
    try {
      await updateDoc(doc(this.collectionTables, key), {
        status,
      });
    } catch (error) {
      throw error;
    }
  }
}
