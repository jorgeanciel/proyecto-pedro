export interface PaymentType {
  id: string;
  empresaId: string;
  formaPagoId: string;
  nombre: string;
  formaPago: string;
}

export interface RequestCreatePaymentType {
  empresaId?: string;
  formaPagoId: string;
  nombre: string;
  formaPago: string;
}
