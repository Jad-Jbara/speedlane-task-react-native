
import { AxiosError, AxiosResponse } from 'axios'

// ---------------------------- GENERAL ----------------------------------

export type ServiceActionParams<
  Params = Record<string, never>,
  Data = Record<string, never>,
> = {
  onSuccess?: (_response?: AxiosResponse<Data>) => Promise<void> | void
  onError?: (_error?: AxiosError<{ message: string }>['response']) => Promise<void> | void
  params?: Params
}

export type ListingParams<T = {}> = {
  offset?: number
  limit?: number
} & T


// ---------------------------- EmployeesService ----------------------------------

export type GetEmployeeParams = ListingParams<{
  query?: string
}>

export type UpdateEmployeeParams = {
  name: string
  phone: number
  salary: number
  position: string
  email: string
  date_of_birth: string
  date_of_joining: string
  location: string
  image_url: string
  department_id: number
}

export type CreateEmployeeParams = Omit<UpdateEmployeeParams, 'id'>