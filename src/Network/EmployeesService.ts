import { GetEmployeeParams, UpdateEmployeeParams, CreateEmployeeParams } from 'Types'
import BaseService from './Base'

class EmployeesService extends BaseService {
  constructor() {
    super('employees')
  }

  async getEmployees(params: GetEmployeeParams) {
    return await new Promise((resolve) =>
      setTimeout(async () => {
        const data = await this.get(this.serviceUrl, { params })
        resolve(data)
      }, 1000)
    )
  }

  async getEmployee(id: string) {
    return await this.get(`${this.serviceUrl}/${id}`, {})
  }

  async createEmployee(data: CreateEmployeeParams) {
    return await this.post(this.serviceUrl, data)
  }

  async updateEmployee(data: UpdateEmployeeParams, id: number) {
    return await this.put(`${this.serviceUrl}/${id}`, data)
  }

  async deleteEmployee(id: string) {
    return await this.delete(`${this.serviceUrl}/${id}`)
  }
}

export default EmployeesService