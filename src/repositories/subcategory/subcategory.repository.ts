import {
  RequestCreateSubCategory,
  SubCategory,
} from "../../types/subcategory/subcategory.interface";

export interface SubCategoryRepository {
  createSubCategory(
    subcategory: RequestCreateSubCategory
  ): Promise<SubCategory>;
}
