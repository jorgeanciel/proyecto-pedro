import { PaymentTypeRepository } from "../repositories/payment-type/payment-type.repository";
import { ApiPaymentTypeImpl } from "../repositories/payment-type/payment-type.impl";
import {
  PaymentType,
  RequestCreatePaymentType,
} from "../types/payment-type/payment-type.interface";

export class PaymentTypeServices implements PaymentTypeRepository {
  private apiPaymentTypeImpl: ApiPaymentTypeImpl;
  constructor() {
    this.apiPaymentTypeImpl = new ApiPaymentTypeImpl();
  }

  async getPaymentType(empresaId: string): Promise<PaymentType[]> {
    return await this.apiPaymentTypeImpl.getPaymentMethod(empresaId);
  }

  async createPaymentType(
    category: RequestCreatePaymentType
  ): Promise<PaymentType> {
    return await this.apiPaymentTypeImpl.createPaymentType(category);
  }
}
