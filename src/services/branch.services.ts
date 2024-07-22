import { ApiBranchImpl } from "../repositories/branch/branch.impl";
import { BranchRepository } from "../repositories/branch/branch.repository";
import { RequestCreateBranch, Branch } from "../types/branch/branch.interface";

export class BranchServices implements BranchRepository {
  private apiBranchImpl: ApiBranchImpl;
  constructor() {
    this.apiBranchImpl = new ApiBranchImpl();
  }

  async createBranch(branch: RequestCreateBranch): Promise<Branch> {
    return await this.apiBranchImpl.createBranch(branch);
  }
}
