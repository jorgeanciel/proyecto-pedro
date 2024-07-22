import { AxiosResponse } from "axios";
import { ApiClient } from "../../utils/api-client";
import {
  Customer,
  RequestCreateCustomer,
} from "../../types/customer/customer.interface";
import { CustomerRepository } from "./customer.repository";

export class ApiCustomerImpl implements CustomerRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getCustomer(id: string): Promise<Customer[]> {
    const response: AxiosResponse<{ data: Customer[] }> = await this.apiClient
      .getHttpClient()
      .get(`${import.meta.env.VITE_API_URL as string}/api/cliente/list/${id}`);

    return response.data.data;
  }

  async createCustomer(customer: RequestCreateCustomer): Promise<Customer> {
    const response: AxiosResponse<{ data: Customer }> = await this.apiClient
      .getHttpClient()
      .post(`${import.meta.env.VITE_API_URL as string}/api/cliente/create`, {
        empresaId: import.meta.env.VITE_BUSINESS_ID as string,
        tipoCliente: customer.tipoCliente,
        nombre: customer.nombre,
        direccion: customer.direccion,
        email: customer.email,
        telefono: customer.telefono,
        tipoDocumentoId: customer.tipoDocumentoId,
        numeroDocumento: customer.numeroDocumento,
      });
    return response.data.data;
  }
}
