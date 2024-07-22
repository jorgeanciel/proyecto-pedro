export interface PaymentMethod {
    id:string
    empresaId: string
    nombre:string
    estado:string
}


export interface RequestCreatePaymentMethod {
    empresaId?: string
    nombre:string
}
