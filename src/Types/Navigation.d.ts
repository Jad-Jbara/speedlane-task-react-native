
import { StackScreenProps } from '@react-navigation/stack'
import { Employee } from './Classes'

export type MainParamsList = {
  EmployeeListingScreen?: {}
  AddEmployeeScreen?: {}
  EmployeeDetailsScreen?: {
    id: number
  }
  EmployeeFormsScreen?: {
    item?: Employee
    isEdit?: boolean
  }
}

export type MainStackScreenProps<T extends keyof MainParamsList> =
  StackScreenProps<MainParamsList, T>

export type NavigationPropType<T extends keyof MainParamsList> = (
  MainStackScreenProps<T>['navigation']
)

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainParamsList { }
  }
}

