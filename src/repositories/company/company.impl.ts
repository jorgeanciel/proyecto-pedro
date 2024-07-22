import { AxiosResponse } from "axios";
import {
  RequestCreateCompany,
  Company,
} from "../../types/company/company.interface";
import { ApiClient } from "../../utils/api-client";
import { CompanyRepository } from "./company.repository";

export class ApiCompanyImpl implements CompanyRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async createCompany(company: RequestCreateCompany): Promise<Company> {
    const response: AxiosResponse<{ data: Company }> = await this.apiClient
      .getHttpClient()
      .post(`${import.meta.env.VITE_API_URL as string}/api/empresa/create`, {
        nombre: company.nombre,
        descripcion: company.descripcion,
        direccion: company.direccion,
        telefono: company.telefono,
        ruc: company.ruc,
        responsable: company.responsable,
      });
    return response.data.data;
  }
}
