import React, { PropsWithChildren } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'

import styles from './styles'

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>
}>

const BottomAction: React.FC<Props> = ({
  children,
  style: overrideStyle,
}) => {
  const style = [
    styles.container,
    overrideStyle,
  ]

  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown}
      style={style}>
      {children}
    </Animated.View>
  )
}

export default BottomAction
