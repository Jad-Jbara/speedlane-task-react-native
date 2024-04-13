import { computed, makeObservable, observable } from 'mobx'
import BaseStore from './BaseStore'
import EmployeesService from 'Network/EmployeesService'
import { Employee, GetEmployeeParams, ServiceActionParams, UpdateEmployeeParams } from 'Types'

const loaders = {
  employeesLoader: false,
  employeeLoader: false,
  deleteEmployeeLoader: false,
}

class EmployeesStore extends BaseStore<EmployeesService, typeof loaders> {
  employees: Employee[] = []
  modifiedEmployee: Employee | null = null
  selectedFilters: Record<string, any> = {}

  constructor() {
    super(EmployeesService, loaders)
    makeObservable(this, {
      employees: observable,
      modifiedEmployee: observable,
      selectedFilters: observable,
      hasSelectedFilters: computed,
    })
  }

  async getEmployees({
    params,
    onSuccess,
    onError,
  }: ServiceActionParams<GetEmployeeParams, Employee>) {
    this.performServiceAction({
      apiCall: 'getEmployees',
      loader: 'employeesLoader',
      params,
      onSuccess,
      onError,
    })
  }

  async getEmployee({
    params,
    onSuccess,
    onError,
  }: ServiceActionParams<number, Employee>) {
    this.performServiceAction({
      apiCall: 'getEmployee',
      loader: 'employeeLoader',
      params,
      onSuccess,
      onError,
    })
  }

  async deleteEmployee({
    params,
    onError,
    onSuccess,
  }: ServiceActionParams<number>) {
    await this.performServiceAction({
      apiCall: 'deleteEmployee',
      params,
      onSuccess: () => {
        this.setValue('employees', this.employees.filter(item => item.id !== params))
        onSuccess && onSuccess()
      },
      onError,
    })
  }

  normalizeEmployeeParams(params?: UpdateEmployeeParams & { id?: number }) {
    if (params?.phone) {
      params.phone = parseInt(String(params.phone))
    }
    if (params?.salary) {
      params.salary = parseInt(String(params.salary))
    }
    if (!params.department_id) {
      params.department_id = 1
    }

    return {
      ...params,
    }
  }

  async updateEmployee({
    params,
    onError,
    onSuccess,
  }: ServiceActionParams<UpdateEmployeeParams & { id?: number }, Employee>) {
    const paramsToUse = this.normalizeEmployeeParams(params)
    delete paramsToUse.id
    await this.performServiceAction<Employee>({
      apiCall: 'updateEmployee',
      optionalParams: [params?.id],
      params: paramsToUse,
      onSuccess: (response) => {
        if (response && response.data) {
          this.setValue('employees', this.employees.map(item => (item.id === response.data?.id ? response.data : item)))
          this.setValue('modifiedEmployee', response.data)
          onSuccess && onSuccess()
        }
      },
      onError,
    })
  }

  async createEmployee({
    params,
    onError,
    onSuccess,
  }: ServiceActionParams<UpdateEmployeeParams, Employee>) {
    const paramsToUse = this.normalizeEmployeeParams(params)
    await this.performServiceAction({
      apiCall: 'createEmployee',
      params: paramsToUse,
      onSuccess: (response) => {
        if (response && response.data) {
          this.setValue('employees', [...this.employees, response.data])
          onSuccess && onSuccess()
        }
      },
      onError,
    })
  }

  get hasSelectedFilters() {
    return Object.keys(this.selectedFilters).length > 0
  }
}

export default new EmployeesStore()
