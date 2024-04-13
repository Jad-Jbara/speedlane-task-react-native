import React, { ReactElement } from 'react'
import { FlatListProps } from 'react-native'
import { AxiosResponse } from 'axios'

import { NavigationType, ServiceActionParams } from 'Types'
import { FlashListProps } from '@shopify/flash-list'
import { stores } from 'Stores/StoreFactory'

export type ListProps = {
  rowComponent: { Row: React.FC<any> | (() => ReactElement), Loader?: React.FC | ReactElement }
  apiService: unknown
  navigation: NavigationType
  extraApiProps?: Record<string, any>
  extraComponentProps?: Record<string, any>
  refreshOnFocus?: boolean
  numColumns?: number
  horizontal?: boolean
  onApiCallBack?: (data: AxiosResponse<any>) => void | Promise<void>
  lastModifiedAt?: Date
  hideNoMoreItems?: boolean
  emptyText?: string
  maxHeight?: number
  noPullToRefresh?: boolean
  store?: keyof typeof stores
  withoutLoader?: boolean
  loader: boolean
  apiCall: (params: ServiceActionParams) => Promise<void>
  dataKey?: string
} & Partial<FlashListProps<{}>>
