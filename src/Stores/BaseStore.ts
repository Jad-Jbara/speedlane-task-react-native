import { AxiosError, AxiosResponse } from 'axios'
import { action, makeObservable, observable } from 'mobx'
import { Stores } from 'Types'

export type PerformActionParams<ApiCall, Params, Loader, Data> = {
  apiCall: ApiCall
  loader?: Loader
  params?: Params
  onSuccess?: (_response: AxiosResponse<Data>) => Promise<void> | void
  onError?: (_error?: AxiosError<{ message: string }>['response']) => Promise<void> | void
  optionalParams?: any[]
}

class BaseStore<Service = Record<string, never>, Loaders = Record<string, never>> {
  service: Service
  stores: Stores | null = null
  loaders: Loaders = {} as Loaders

  constructor(service?: any, loaders: Loaders = {} as Loaders) {
    // Take in service and loaders if present
    // and populate class properties
    this.service = service
    if (service) {
      this.service = new service()
    }
    this.loaders = loaders
    makeObservable(this, {
      loaders: observable,
      setValue: action,
      setLoader: action,
      startLoader: action,
      stopLoader: action,
      performServiceAction: action,
    })
  }

  setValue(key: keyof this, value: any) {
    this[key] = value
  }

  startLoader(key: keyof Loaders) {
    this.setLoader(key, true)
  }

  stopLoader(key: keyof Loaders) {
    this.setLoader(key, false)
  }

  setLoader(key: keyof Loaders, value: boolean) {
    this.loaders[key] = value as any
  }

  async performServiceAction<Data = unknown, Params = unknown>({
    apiCall,
    onSuccess,
    onError,
    loader,
    params,
    optionalParams = [],
  }: PerformActionParams<keyof Service, Params, keyof Loaders, Data>) {
    if (this.service) {
      loader && this.startLoader(loader)
      // const func = this.service[apiCall] as CallableFunction
      // TODO: handle TS error
      const response = await this.service[apiCall]<Data>(params, ...optionalParams)
      if (response?.success) {
        onSuccess && await onSuccess(response)
      } else {
        onError && await onError(response)
      }
      loader && this.stopLoader(loader)
      return response?.data || response
    }
    return null
  }
}

export default BaseStore
