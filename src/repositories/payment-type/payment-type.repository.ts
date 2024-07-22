import { PaymentType, RequestCreatePaymentType } from "../../types/payment-type/payment-type.interface";

  
  export interface PaymentTypeRepository {
    createPaymentType(paymentType: RequestCreatePaymentType): Promise<PaymentType>;
  }