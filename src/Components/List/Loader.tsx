import React from 'react'
import { View } from 'react-native'
import styles from './styles'

type Props = {
  RowComponent: any
  numberOfLoaders?: number
  numColumns?: number
  horizontal?: boolean
}

const Loader: React.FC<Props> = ({
  RowComponent,
  numberOfLoaders = 1,
  numColumns = 1,
}) => {
  const flexDirection = 'row'

  if (!RowComponent.Loader) {
    return null
  }

  const numberOfLoadersPerRow = numColumns > 1 ? numColumns : numberOfLoaders
  const array = new Array(numberOfLoadersPerRow).fill(null)

  return (
    <View style={[styles.loaderContainer, { flexDirection }]}>
      {array.map((_, index) => {
        return (
          <RowComponent.Loader key={`loader_${index}`} />
        )
      })}
    </View>
  )
}

export default Loader
