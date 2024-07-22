import { AxiosResponse } from "axios";
import {
  RequestCreateSubCategory,
  SubCategory,
} from "../../types/subcategory/subcategory.interface";
import { ApiClient } from "../../utils/api-client";
import { SubCategoryRepository } from "./subcategory.repository";

export class ApiSubCategoryImpl implements SubCategoryRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async createSubCategory(
    subcategory: RequestCreateSubCategory
  ): Promise<SubCategory> {
    const response: AxiosResponse<{ data: SubCategory }> = await this.apiClient
      .getHttpClient()
      .post(
        `${import.meta.env.VITE_API_URL as string}/api/subCategoria/create`,
        {
          categoriaId: "1",
          empresaId: import.meta.env.VITE_BUSINESS_ID as string,
          nombre: subcategory.nombre,
        }
      );
    return response.data.data;
  }
}
