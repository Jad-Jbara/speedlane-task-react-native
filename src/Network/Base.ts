import axios, { AxiosInstance, AxiosResponse } from 'axios'

import ConfirmationModalStore from '../Stores/ConfirmationModalStore'

import ConstantKeys from 'Constants/Keys'
import NetworkStore from 'Stores/NetworkStore'
type Action = 'post' | 'put' | 'get' | 'delete'

const DEFAULT_TIMEOUT = 30000 // 30 seconds
axios.defaults.timeout = DEFAULT_TIMEOUT

const verbs: Action[] = ['post', 'put', 'get', 'delete']

verbs.forEach((v) => {
  axios.defaults.headers[v]['Content-Type'] = 'application/json'
})

type Headers = {
  'Content-Type': string
  'Accept-Language': string
  Language: string
}

const toQueryString = (url: string, params: any) => {
  const query = Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&')
  return url + (query ? '?' + query : '')
}

class BaseService {
  serviceUrl: string
  axios: AxiosInstance

  constructor(serviceUrl: string) {
    const instance = axios.create({
      baseURL: NetworkStore.apiEndPoint,
      timeout: DEFAULT_TIMEOUT,
    })
    this.axios = instance
    this.serviceUrl = serviceUrl
  }

  headers() {
    const selectedLanguage = NetworkStore.selectedLanguage || ConstantKeys.DEFAULT_LOCALE
    const headers: Headers = {
      'Content-Type': 'application/json',
      'Accept-Language': selectedLanguage,
      'Language': selectedLanguage,
    }


    return headers
  }

  async request<T>(method: Action, url: string, params?: any, headers: Headers = this.headers()): Promise<any> {
    try {
      const requestParams = method === 'delete' ? [{ params, headers }] as const : [params, { headers }] as const
      const response = await this.axios[method]<AxiosResponse<T>>(url, ...requestParams)
      return response?.data
    } catch (error) {
      return await this.handleLogError(error, url, method)
    }
  }

  async handleLogError(error: any, url: string, method: Action) {
    const errorMessage: any = error
    ConfirmationModalStore.error(errorMessage?.response?.data?.message || error.message)
    console.warn(errorMessage?.response?.data?.message || error, url, method, this.headers())
    return error.response
  }

  async get<Response>(url = this.serviceUrl, { params = {}, headers, ...extra }: any = {}) {
    try {
      const queryUrl = toQueryString(url, params)
      const resp = await this.axios.get<AxiosResponse<Response>>(queryUrl, {
        ...extra,
        headers: {
          ...this.headers(),
          ...headers,
        },
      })
      return resp.data
    } catch (error) {
      return await this.handleLogError(error, url, 'get')
    }
  }

  async post<T>(url: string = this.serviceUrl, params: any, { headers }: any = {}) {
    return await this.request<T>('post', url, params, headers)
  }

  async put<T>(url: string = this.serviceUrl, params: any, { headers }: any = {}) {
    return await this.request<T>('put', url, params, headers)
  }

  async delete<T>(url: string = this.serviceUrl, params: any = {}, { headers }: any = {}) {
    return await this.request<T>('delete', url, params, headers)
  }
}

export default BaseService
