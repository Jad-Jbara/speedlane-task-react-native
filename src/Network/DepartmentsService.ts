import BaseService from './Base'

class DepartmentsService extends BaseService {
  constructor() {
    super('departments')
  }

  async getDepartments(params = {}) {
    return await this.get(this.serviceUrl, { params })
  }
}

export default DepartmentsService