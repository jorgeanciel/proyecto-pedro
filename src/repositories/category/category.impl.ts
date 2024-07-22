import { AxiosResponse } from "axios";
import { CategoryRepository } from "./category.repository";
import {
  Category,
  RequestCreateCategory,
} from "../../types/category/category.interface";
import { ApiClient } from "../../utils/api-client";

export class ApiCategoryImpl implements CategoryRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getCategories(id: string): Promise<Category[]> {
    const response: AxiosResponse<{ data: Category[] }> = await this.apiClient
      .getHttpClient()
      .get(
        `${
          import.meta.env.VITE_API_URL as string
        }/api/categoria/listarCategorias/${id}`
      );

    return response.data.data;
  }

  async createCategory(category: RequestCreateCategory): Promise<Category> {
    const response: AxiosResponse<{ data: Category }> = await this.apiClient
      .getHttpClient()
      .post(`${import.meta.env.VITE_API_URL as string}/api/categoria/create`, {
        empresaId: import.meta.env.VITE_BUSINESS_ID as string,
        nombre: category.nombre,
      });
    return response.data.data;
  }
}
