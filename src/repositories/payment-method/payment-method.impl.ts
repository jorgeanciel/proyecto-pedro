import { AxiosResponse } from "axios";
import { ApiClient } from "../../utils/api-client";
import { PaymentMethodRepository } from "./payment-method.repository";
import { PaymentMethod, RequestCreatePaymentMethod } from "../../types/payment-method/payment-method.interface";

export class ApiPaymentMethodImpl implements PaymentMethodRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getPaymentMethod(id: string): Promise<PaymentMethod[]> {
    const response: AxiosResponse<{ data: PaymentMethod[] }> = await this.apiClient
      .getHttpClient()
      .get(
        `${
          import.meta.env.VITE_API_URL as string
        }/api/formaPago/listarFormaPago/${id}`
      );

    return response.data.data;
  }

  async createPaymentMethod(paymentMethod: RequestCreatePaymentMethod): Promise<PaymentMethod> {
    const response: AxiosResponse<{ data: PaymentMethod }> = await this.apiClient
      .getHttpClient()
      .post(`${import.meta.env.VITE_API_URL as string}/api/formaPago/create`, {
        empresaId: import.meta.env.VITE_BUSINESS_ID as string,
        nombre: paymentMethod.nombre,
      });
    return response.data.data;
  }
}