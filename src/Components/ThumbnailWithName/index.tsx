import React from 'react'
import { ImageSourcePropType, View } from 'react-native'

import Thumbnail from 'Components/Thumbnail'
import Text from 'Components/Text'

import styles from './styles'

type Props = {
  imageSource?: ImageSourcePropType
  name?: string
}

const IMAGE_SIZE = 150

const ThumbnailWithName: React.FC<Props> = ({
  name,
  imageSource
}) => {
  return (
    <View style={styles.container}>
      <Thumbnail
        extraStyle={styles.thumbnail}
        imageSource={imageSource}
        size={IMAGE_SIZE}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  )
}
export default ThumbnailWithName

