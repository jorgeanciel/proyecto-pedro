import { Customer, RequestCreateCustomer } from "../../types/customer/customer.interface";

export interface CustomerRepository {
    createCustomer(customer: RequestCreateCustomer):Promise<Customer>
}