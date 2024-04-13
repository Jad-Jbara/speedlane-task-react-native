import React, { PropsWithChildren, useState } from 'react'
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6'

import NativeButton from 'Components/Buttons/NativeButton'
import Text from 'Components/Text'

import styles from './styles'
import Animated, { interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import { Easing } from 'react-native'
import Colors from 'Theme/Colors'

type Props = PropsWithChildren<{
  onSpin?: () => void
}>

const SPIN_DURATION = 1000

const AnimatedNativeButton = Animated.createAnimatedComponent(NativeButton)
const AnimatedIcon = Animated.createAnimatedComponent(FontAwesome6Icon)

const RandomButtonSpinner: React.FC<Props> = ({
  onSpin,
}: Props) => {
  const rotation = useSharedValue(0)
  const scale = useSharedValue(1)
  const [isSpinning, setIsSpinning] = useState(false)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    }
  })

  const buttonAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: interpolateColor(
        scale.value,
        [1, 1.2],
        [Colors.primaryColor, Colors.lightBlue]
      ),

    }
  })

  // workaround for animation callback
  const onSpinEnd = () => {
    onSpin && onSpin()
    setIsSpinning(false)
  }

  const onPress = () => {
    const NUMBER_OF_SPINS = 5
    setIsSpinning(true)
    scale.value = withSequence(
      withSpring(1.2),
      withTiming(1, { duration: SPIN_DURATION / 3, }),
    )
    rotation.value = withTiming(rotation.value + 360 * NUMBER_OF_SPINS, { duration: SPIN_DURATION })
    setTimeout(() => {
      onSpinEnd()
    }, SPIN_DURATION)
  }

  return (
    <AnimatedNativeButton
      disabled={isSpinning}
      onPress={onPress}
      style={[styles.container, buttonAnimatedStyles]}>
      <AnimatedIcon
        name='arrows-spin'
        style={[styles.spinIcon, animatedStyles]}
      />
      <Text style={styles.label}>
        Generate Random image
      </Text>
    </AnimatedNativeButton>
  )
}

export default RandomButtonSpinner