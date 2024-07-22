export interface Category {
  id: string;
  empresaId: string;
  nombre: string;
  stado: string;
}

export interface RequestCreateCategory {
  empresaId?: string;
  nombre: string;
}
