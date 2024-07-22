export interface Customer {
  id:string;
  empresaId: string;
  tipoCliente: string;
  nombre: string;
  direccion: string;
  email: string;
  telefono: string;
  tipoDocumentoId: number;
  numeroDocumento: string;
  estado:string
  tipoDocumento:string
}

export interface RequestCreateCustomer {
  empresaId?: string;
  nombre: string;
  tipoCliente: string
  direccion: string
  email: string
  telefono: string
  tipoDocumentoId : string
  numeroDocumento: string
}