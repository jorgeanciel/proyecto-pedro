export interface Mesurement {
    id: string
    empresaId: string
    nombre: string
    abreviatura: string
    estado: string
}

export interface RequestCreateMesurement{
    empresaId?: string
    nombre: string
    abreviatura: string
}