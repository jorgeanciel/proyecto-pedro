import { AxiosResponse } from "axios";
import {
  Mesurement,
  RequestCreateMesurement,
} from "../../types/mesurement/mesurement.interface";
import { ApiClient } from "../../utils/api-client";
import { MesurementRepository } from "./mesurement.repository";

export class ApiMesurementImpl implements MesurementRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getMesurement(id: string): Promise<Mesurement[]> {
    const response: AxiosResponse<{ data: Mesurement[] }> = await this.apiClient
      .getHttpClient()
      .get(
        `${
          import.meta.env.VITE_API_URL as string
        }/api/unidadDeMedida/list/${id}`
      );

    return response.data.data;
  }

  async createMesurement(
    mesurement: RequestCreateMesurement
  ): Promise<Mesurement> {
    const response: AxiosResponse<{ data: Mesurement }> = await this.apiClient
      .getHttpClient()
      .post(
        `${import.meta.env.VITE_API_URL as string}/api/unidadDeMedida/create`,
        {
          empresaId: import.meta.env.VITE_BUSINESS_ID as string,
          nombre: mesurement.nombre,
          abreviatura: mesurement.abreviatura,
        }
      );
    return response.data.data;
  }
}
