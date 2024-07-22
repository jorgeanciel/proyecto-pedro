import { ApiMesurementImpl } from "../repositories/mesurement/mesurement.impl";
import { MesurementRepository } from "../repositories/mesurement/mesurement.repository";
import {
  Mesurement,
  RequestCreateMesurement,
} from "../types/mesurement/mesurement.interface";

export class MesurementService implements MesurementRepository {
  private apiMesurementImpl: ApiMesurementImpl;
  constructor() {
    this.apiMesurementImpl = new ApiMesurementImpl();
  }

  async getMesurement(empresaId: string): Promise<Mesurement[]> {
    return await this.apiMesurementImpl.getMesurement(empresaId);
  }

  async createMesurement(
    mesurement: RequestCreateMesurement
  ): Promise<Mesurement> {
    return await this.apiMesurementImpl.createMesurement(mesurement);
  }
}
