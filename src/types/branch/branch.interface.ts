export interface Branch {
  id: string;
  empresaId: string;
  codigo: string;
  nombre: string;
  direccion: string;
  telefono: string;
  estado: string;
}

export interface RequestCreateBranch {
  empresaId?: string;
  nombre: string;
  direccion: string;
  telefono: string;
}
