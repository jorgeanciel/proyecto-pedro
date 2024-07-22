import {
  Company,
  RequestCreateCompany,
} from "../../types/company/company.interface";

export interface CompanyRepository {
  createCompany(company: RequestCreateCompany): Promise<Company>;
}
