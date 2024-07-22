import { AxiosResponse } from "axios";
import {
  RequestCreateBranch,
  Branch,
} from "../../types/branch/branch.interface";
import { ApiClient } from "../../utils/api-client";
import { BranchRepository } from "./branch.repository";

export class ApiBranchImpl implements BranchRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async createBranch(branch: RequestCreateBranch): Promise<Branch> {
    const response: AxiosResponse<{ data: Branch }> = await this.apiClient
      .getHttpClient()
      .post(`${import.meta.env.VITE_API_URL as string}/api/sucursal/create`, {
        empresaId: import.meta.env.VITE_BUSINESS_ID as string,
        nombre: branch.nombre,
        direccion: branch.direccion,
        telefono: branch.telefono,
      });
    return response.data.data;
  }
}
