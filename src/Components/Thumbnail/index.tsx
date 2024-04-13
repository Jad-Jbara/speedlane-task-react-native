import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'

import NativeButton from 'Components/Buttons/NativeButton'

import DimensionHelper from 'Helpers/DimensionHelper'

import { StyleType } from 'Types'

import styles from './styles'

type Props = {
  onPress?: () => void
  size?: number
  imageSource?: ImageSourcePropType
  extraStyle?: StyleType
}

const DEFAULT_SIZE = 24

const Thumbnail: React.FC<Props> = ({
  onPress,
  size = DEFAULT_SIZE,
  imageSource,
  extraStyle,
}) => {
  const widthStyle = {
    width: DimensionHelper.getWidth(size),
  }

  const thumbnailContainerStyle = [
    styles.container,
    widthStyle,
    extraStyle,
  ]

  return (
    <NativeButton
      disabled={!onPress}
      onPress={onPress}
      style={thumbnailContainerStyle}>
      <Image
        source={imageSource}
        style={[styles.image, widthStyle, extraStyle]}
      />
    </NativeButton>
  )
}
export default Thumbnail

