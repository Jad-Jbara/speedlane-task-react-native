import React from 'react'
import { ViewProps } from 'react-native'
import Animated, {
  FadeIn,
  FadeOut,
  type AnimatedProps,
} from 'react-native-reanimated'

const AnimatedFadingView: React.FC<AnimatedProps<ViewProps>> = ({
  entering = FadeIn,
  exiting = FadeOut,
  ...props
}) => {
  return <Animated.View {...props} entering={entering} exiting={exiting} />
}

export default AnimatedFadingView
