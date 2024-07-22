import { ApiPaymentMethodImpl } from "../repositories/payment-method/payment-method.impl";
import { PaymentMethodRepository } from "../repositories/payment-method/payment-method.repository";

import { PaymentMethod, RequestCreatePaymentMethod } from "../types/payment-method/payment-method.interface";

export class PaymentMethodServices implements PaymentMethodRepository{
  private apiPaymentMethodImpl: ApiPaymentMethodImpl;
  constructor() {
    this.apiPaymentMethodImpl = new ApiPaymentMethodImpl();
  }

  async getPaymentMethod(empresaId: string): Promise<PaymentMethod[]> {
    return await this.apiPaymentMethodImpl.getPaymentMethod(empresaId);
  }

  async createPaymentMethod(paymentMethod: RequestCreatePaymentMethod): Promise<PaymentMethod> {
    return await this.apiPaymentMethodImpl.createPaymentMethod(paymentMethod);
  }
}