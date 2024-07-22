export interface DucumentType {
  id: string;
  empresaId: string;
  codigo: string;
  cod: string;
  nombre: string;
  descripcion: string;
  estado: string;
}

export interface RequestCreateDocumentType {
  empresaId?: string;
  cod: string;
  nombre: string;
  descripcion: string;
}
