import { ApiSubCategoryImpl } from "../repositories/subcategory/subcategory.impl";
import { SubCategoryRepository } from "../repositories/subcategory/subcategory.repository";
import {
  RequestCreateSubCategory,
  SubCategory,
} from "../types/subcategory/subcategory.interface";

export class SubCategoryServices implements SubCategoryRepository {
  private apiSubCategoryImpl: ApiSubCategoryImpl;
  constructor() {
    this.apiSubCategoryImpl = new ApiSubCategoryImpl();
  }

  async createSubCategory(
    subcategory: RequestCreateSubCategory
  ): Promise<SubCategory> {
    return await this.apiSubCategoryImpl.createSubCategory(subcategory);
  }
}
