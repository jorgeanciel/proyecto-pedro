import { CategoryRepository } from "../repositories/category/category.repository";
import { ApiCategoryImpl } from "../repositories/category/category.impl";
import {
  Category,
  RequestCreateCategory,
} from "../types/category/category.interface";

export class CategoryServices implements CategoryRepository {
  private apiCategoryImpl: ApiCategoryImpl;
  constructor() {
    this.apiCategoryImpl = new ApiCategoryImpl();
  }

  async getCategories(empresaId: string): Promise<Category[]> {
    return await this.apiCategoryImpl.getCategories(empresaId);
  }

  async createCategory(category: RequestCreateCategory): Promise<Category> {
    return await this.apiCategoryImpl.createCategory(category);
  }
}
