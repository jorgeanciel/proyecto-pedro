import {
  Mesurement,
  RequestCreateMesurement,
} from "../../types/mesurement/mesurement.interface";

export interface MesurementRepository {
  createMesurement(mesurement: RequestCreateMesurement): Promise<Mesurement>;
  getMesurement(empresaId: string): Promise<Mesurement[]>;
}
