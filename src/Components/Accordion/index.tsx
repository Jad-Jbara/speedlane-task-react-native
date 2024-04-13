import React, { PropsWithChildren, useState } from 'react'
import { View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Animated, { FadeInUp, FadeOutUp, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import NativeButton from 'Components/Buttons/NativeButton'
import Text from 'Components/Text'

import Colors from 'Theme/Colors'

import styles from './styles'

type Props = PropsWithChildren<{
  title: string
}>

const AnimatedMaterialCommunityIcons = Animated.createAnimatedComponent(MaterialCommunityIcons)

const Accordion: React.FC<Props> = ({
  title,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const iconRotation = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateX: `${iconRotation.value}deg` }]
    }
  })

  const toggleExpanded = () => {
    iconRotation.value = withTiming(isExpanded ? 0 : 180)
    setIsExpanded(expanded => !expanded)
  }

  return (
    <View style={styles.container}>
      <NativeButton
        onPress={toggleExpanded}
        style={styles.row}>
        <Text style={styles.label}>{title}</Text>
        <AnimatedMaterialCommunityIcons
          name='chevron-down'
          size={32}
          color={Colors.black}
          style={animatedStyles}
        />
      </NativeButton>
      {isExpanded ? <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}>
        {children}
      </Animated.View> : null}
    </View>
  )
}
export default React.memo(Accordion)
