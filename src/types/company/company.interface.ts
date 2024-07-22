export interface Company {
  id: string;
  nombre: string;
  descripcion: string;
  direccion: string;
  telefono: string;
  ruc: string;
  responsable: string;
  estado: string;
}

export interface RequestCreateCompany {
  nombre: string;
  descripcion: string;
  direccion: string;
  telefono: string;
  ruc: string;
  responsable: string;
}
