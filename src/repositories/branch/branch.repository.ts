import {
  Branch,
  RequestCreateBranch,
} from "../../types/branch/branch.interface";

export interface BranchRepository {
  createBranch(branch: RequestCreateBranch): Promise<Branch>;
}
