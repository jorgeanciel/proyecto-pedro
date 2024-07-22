import {
  Category,
  RequestCreateCategory,
} from "../../types/category/category.interface";

export interface CategoryRepository {
  getCategories(empresaId: string): Promise<Category[]>;
  createCategory(category: RequestCreateCategory): Promise<Category>;
}
