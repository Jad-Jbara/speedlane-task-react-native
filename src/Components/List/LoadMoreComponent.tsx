import Text from 'Components/Text'
import { useLocale } from 'Hooks'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Loader from './Loader'
import styles from './styles'

type Props = {
  canLoadMore: boolean
  items: any[]
  ListEmptyComponent: any
  hideNoMoreItems?: boolean
  horizontal?: boolean
  emptyText?: string
  loadingMore?: boolean
  RowComponent: any
  loadItems: ({ reset }: { reset: boolean }) => Promise<void>
  data: any[]
}

const LoadMoreComponent: React.FC<Props> = ({
  canLoadMore,
  ListEmptyComponent,
  hideNoMoreItems,
  horizontal,
  loadingMore,
  RowComponent,
  loadItems,
  data,
}) => {
  if (!canLoadMore || data.length === 0) {
    if (ListEmptyComponent) {
      return ListEmptyComponent
    }

    return null
  }

  if (loadingMore && RowComponent.Loader) {
    return (
      <Loader
        RowComponent={RowComponent}
        horizontal={horizontal}
      />
    )
  }

  return null
}

export default LoadMoreComponent
