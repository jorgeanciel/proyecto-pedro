export interface SubCategory {
  id: string;
  categoriaId: string;
  empresaId: string;
  codigo: string;
  nombre: string;
  estado: string;
}

export interface RequestCreateSubCategory {
  categoriaId?: string;
  empresaId?: string;
  nombre: string;
}
