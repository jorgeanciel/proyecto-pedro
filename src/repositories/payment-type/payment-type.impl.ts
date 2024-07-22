import { AxiosResponse } from "axios";
import { ApiClient } from "../../utils/api-client";
import { PaymentTypeRepository } from "./payment-type.repository";
import {
  PaymentType,
  RequestCreatePaymentType,
} from "../../types/payment-type/payment-type.interface";

export class ApiPaymentTypeImpl implements PaymentTypeRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getPaymentMethod(id: string): Promise<PaymentType[]> {
    const response: AxiosResponse<{ data: PaymentType[] }> =
      await this.apiClient
        .getHttpClient()
        .get(
          `${import.meta.env.VITE_API_URL as string}/api/tipoPago/list/${id}`
        );

    return response.data.data;
  }

  async createPaymentType(
    paymentType: RequestCreatePaymentType
  ): Promise<PaymentType> {
    const response: AxiosResponse<{ data: PaymentType }> = await this.apiClient
      .getHttpClient()
      .post(`${import.meta.env.VITE_API_URL as string}/api/tipoPago/create`, {
        empresaId: import.meta.env.VITE_BUSINESS_ID as string,
        formaPagoId: paymentType.formaPagoId,
        nombre: paymentType.nombre,
      });
    return response.data.data;
  }
}
