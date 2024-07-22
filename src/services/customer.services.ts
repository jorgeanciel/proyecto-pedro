import { CustomerRepository } from "../repositories/customer/customer.repository";
import { ApiCustomerImpl } from "../repositories/customer/customer.impl";
import { Customer, RequestCreateCustomer } from "../types/customer/customer.interface";

export class CustomerServices implements CustomerRepository {
  private apiCustomerImpl: ApiCustomerImpl;
  constructor() {
    this.apiCustomerImpl = new ApiCustomerImpl();
  }

  async getCustomer(empresaId: string): Promise<Customer[]> {
    return await this.apiCustomerImpl.getCustomer(empresaId);
  }

  async createCustomer(category: RequestCreateCustomer): Promise<Customer> {
    return await this.apiCustomerImpl.createCustomer(category);
  }
}