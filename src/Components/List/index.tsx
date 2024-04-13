import React, { useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { View } from 'react-native'

import RefreshControl from 'Components/RefreshControl'

import Loader from './Loader'
import LoadMoreComponent from './LoadMoreComponent'

import styles from './styles'

import type { ListProps } from './ListProps'
import { FlashList, ListRenderItem } from '@shopify/flash-list'
import { stores } from 'Stores/StoreFactory'

const LIMIT_PER_CALL = 20

const List: React.FC<ListProps> = ({
  rowComponent,
  extraApiProps,
  onApiCallBack,
  extraComponentProps,
  hideNoMoreItems,
  horizontal,
  lastModifiedAt,
  navigation,
  numColumns = 1,
  ListEmptyComponent,
  emptyText,
  maxHeight,
  apiCall,
  withoutLoader = false,
  data = [],
  store,
  dataKey,
  ...props
}) => {
  // const [items, setItems] = useState<any[]>(props?.items || storeData || [])
  const [canLoadMore, setCanLoadMore] = useState(true)
  if (!data || !store) { return }

  const RowComponent = rowComponent
  // const ITEMS_PAGE_LIMIT = extraApiProps?.limit || LIMIT_PER_CALL
  const hasItems = data.length > 0

  const loadItems = async ({ reset } = { reset: false }) => {

    const offsetToUse = reset ? 0 : data.length
    if (apiCall) {
      await apiCall({
        params: {
          limit: LIMIT_PER_CALL,
          offset: offsetToUse,
          ...extraApiProps,
        },
        onSuccess: (response) => {
          const newData = response?.data || []
          if (newData.length > 0) {
            stores[store]?.setValue(dataKey, reset ? newData : [...data, ...newData])
            setCanLoadMore(true)
          } else if (reset) {
            stores[store]?.setValue(dataKey, [])
          }
        },
        onError: (response) => {
          console.log('Error loading data', response)
          setCanLoadMore(false)
        }
      })
    }
  }

  const onRefresh = useCallback(async () => {
    await loadItems({ reset: true })
  }, [extraApiProps, lastModifiedAt])

  useEffect(() => {
    if (lastModifiedAt || data?.length === 0) {
      onRefresh()
    }
  }, [lastModifiedAt, withoutLoader])

  useEffect(() => {
    if (!hasItems && !lastModifiedAt) {
      loadItems({ reset: !data })
    }
  }, [])

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    const isLastItem = index === data.length - 1

    return (
      <RowComponent.Row
        navigation={navigation}
        index={index}
        item={item}
        // key={`list_row_${item.id}`}
        // maxWidth={!horizontal && maxWidth}
        numColumns={numColumns}
        // withMaxWidth
        isLastInList={isLastItem}
        {...extraComponentProps}
      />
    )
  }

  const ListFooterComponent = (canLoadMore) ? (
    <LoadMoreComponent
      RowComponent={RowComponent}
      ListEmptyComponent={ListEmptyComponent}
      canLoadMore={canLoadMore}
      hideNoMoreItems={hideNoMoreItems}
      horizontal={horizontal}
      emptyText={emptyText}
      // loadingMore={loadingMore}
      loadItems={loadItems}
      data={data}
    />
  ) : undefined

  const keyExtractor = (item: { id: number }) => `list_row_${item.id}`

  const refreshFromRefreshControl = async () => {
    await onRefresh()
  }

  const refreshControl = (
    <RefreshControl
      refreshing={props.loader}
      onRefresh={refreshFromRefreshControl}
    />
  )
  const onEndReached = async () => {
    // hasItems && canLoadMore && await loadItems()
  }

  const EmptyComponent = props.loader && rowComponent.Loader ? rowComponent.Loader : ListEmptyComponent

  return (
    <FlashList
      data={data}
      keyExtractor={keyExtractor}
      refreshControl={refreshControl}
      renderItem={renderItem}
      ListFooterComponent={ListFooterComponent}
      scrollEventThrottle={16}
      maxToRenderPerBatch={30}
      updateCellsBatchingPeriod={500}
      onEndReachedThreshold={0.1}
      horizontal={horizontal}
      numColumns={numColumns}
      ListEmptyComponent={EmptyComponent}
      onEndReached={onEndReached}
      extraData={store[dataKey]}
      estimatedItemSize={100}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      {...props}
      contentContainerStyle={
        props.contentContainerStyle || styles.contentContainer
      }
    />
  )
}

export default observer(List)
