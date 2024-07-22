import { AxiosResponse } from "axios";
import {
  RequestCreateDocumentType,
  DucumentType,
} from "../../types/document-type/document-type.interface";
import { ApiClient } from "../../utils/api-client";
import { DocumentTypeRepository } from "./document-type.repository";

export class ApiDocumentTypeImpl implements DocumentTypeRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getDocumentType(id: string): Promise<DucumentType[]> {
    const response: AxiosResponse<{ data: DucumentType[] }> = await this.apiClient
      .getHttpClient()
      .get(
        `${
          import.meta.env.VITE_API_URL as string
        }/api/tipoDocumento/list/${id}`
      );

    return response.data.data;
  }

  async createDocumentType(
    documentType: RequestCreateDocumentType
  ): Promise<DucumentType> {
    const response: AxiosResponse<{ data: DucumentType }> = await this.apiClient
      .getHttpClient()
      .post(
        `${import.meta.env.VITE_API_URL as string}/api/tipoDocumento/create`,
        {
          empresaId: import.meta.env.VITE_BUSINESS_ID as string,
          cod: documentType.cod,
          nombre: documentType.nombre,
          descripcion: documentType.descripcion,
        }
      );
    return response.data.data;
  }
}
