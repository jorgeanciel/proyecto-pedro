import { PaymentMethod, RequestCreatePaymentMethod } from "../../types/payment-method/payment-method.interface";

  
  export interface PaymentMethodRepository {
    getPaymentMethod(empresaId: string): Promise<PaymentMethod[]>;
    createPaymentMethod(paymentMethod: RequestCreatePaymentMethod): Promise<PaymentMethod>;
  }