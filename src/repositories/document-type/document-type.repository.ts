import {
  DucumentType,
  RequestCreateDocumentType,
} from "../../types/document-type/document-type.interface";

export interface DocumentTypeRepository {
  createDocumentType(
    documentType: RequestCreateDocumentType
  ): Promise<DucumentType>;
}
