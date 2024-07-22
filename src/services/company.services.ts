import { ApiCompanyImpl } from "../repositories/company/company.impl";
import { CompanyRepository } from "../repositories/company/company.repository";
import {
  RequestCreateCompany,
  Company,
} from "../types/company/company.interface";

export class CompanyServices implements CompanyRepository {
  private apiCompanyImpl: ApiCompanyImpl;

  constructor() {
    this.apiCompanyImpl = new ApiCompanyImpl();
  }

  async createCompany(company: RequestCreateCompany): Promise<Company> {
    return await this.apiCompanyImpl.createCompany(company);
  }
}
