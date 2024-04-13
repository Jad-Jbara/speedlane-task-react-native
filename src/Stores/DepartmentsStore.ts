import { makeObservable, observable } from 'mobx'

import BaseStore from './BaseStore'

import DepartmentsService from 'Network/DepartmentsService'

import { Department, ServiceActionParams } from 'Types'

class DepartmentsStore extends BaseStore<DepartmentsService> {
  departments: Department[] = []
  constructor() {
    super(DepartmentsService)
    makeObservable(this, {
      departments: observable,
    })
  }

  async getDepartments({
    params,
    onSuccess,
    onError,
  }: ServiceActionParams<undefined, Department>) {
    this.performServiceAction<Department>({
      apiCall: 'getDepartments',
      params,
      onSuccess: (response) => {
        this.setValue('departments', response?.data || [])
        onSuccess && onSuccess(response)
      },
      onError,
    })
  }
}

export default new DepartmentsStore()
