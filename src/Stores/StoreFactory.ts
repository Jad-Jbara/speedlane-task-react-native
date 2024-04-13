import DepartmentsStore from './DepartmentsStore'
import EmployeesStore from './EmployeesStore'
import LanguageStore from './LanguageStore'

class StoreFactory {
  languageStore: typeof LanguageStore
  employeesStore: typeof EmployeesStore
  departmentsStore: typeof DepartmentsStore

  constructor() {
    this.languageStore = LanguageStore
    this.employeesStore = EmployeesStore
    this.departmentsStore = DepartmentsStore
  }
}

const storeFactory = new StoreFactory()
const languageStore = storeFactory.languageStore
const employeesStore = storeFactory.employeesStore
const departmentsStore = storeFactory.departmentsStore


export const stores = {
  languageStore,
  employeesStore,
  departmentsStore,
}


Object.keys(stores).forEach((store) => {
  const storeList = { ...stores }
  if (Boolean(stores[store as keyof typeof stores].setValue)) {
    stores[store as keyof typeof stores].setValue('stores', storeList)
  }
})

export {
  languageStore,
  employeesStore,
  departmentsStore,
}

