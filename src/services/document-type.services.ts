import { ApiDocumentTypeImpl } from "../repositories/document-type/document-type.impl";
import { DocumentTypeRepository } from "../repositories/document-type/document-type.repository";
import {
  RequestCreateDocumentType,
  DucumentType,
} from "../types/document-type/document-type.interface";

export class DocumentTypeServices implements DocumentTypeRepository {
  private apiDocumentTypeImpl: ApiDocumentTypeImpl;
  constructor() {
    this.apiDocumentTypeImpl = new ApiDocumentTypeImpl();
  }

  async getDocumentType(empresaId: string): Promise<DucumentType[]> {
    return await this.apiDocumentTypeImpl.getDocumentType(empresaId);
  }

  async createDocumentType(
    documentType: RequestCreateDocumentType
  ): Promise<DucumentType> {
    return await this.apiDocumentTypeImpl.createDocumentType(documentType);
  }

}
