import { ITableRepository } from "../repositories/table/table.repository";
import { ApiTableImpl } from "../repositories/table/table.impl";
import { DocumentData, Query } from "firebase/firestore";

export class TableServices implements ITableRepository {
  private apiTableImpl: ApiTableImpl;
  constructor() {
    this.apiTableImpl = new ApiTableImpl();
  }

  getTablesQuery(): Query<DocumentData, DocumentData> {
    return this.apiTableImpl.getTablesQuery();
  }

  async changeStatusByKey(key: string, status: string): Promise<void> {
    return await this.apiTableImpl.changeStatusByKey(key, status);
  }
}
