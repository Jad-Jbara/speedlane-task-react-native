import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styles from './styles'
import Colors from 'Theme/Colors'

export enum NotificationType {
  success = 'success',
  error = 'error',
  warning = 'warning',
  disconnected = 'disconnected',
}

type Props = {
  message?: string | null
  title: string | null
  hideNotification: () => void
  type: keyof typeof NotificationType
}

const DELAY = 4000 // in milliseconds
const ANIMATION_DURATION = 450 // in milliseconds

const Notifications: React.FC<Props> = ({
  hideNotification,
  message,
  title,
  type,
}) => {
  const [backgroundColor, setBackgroundColor] = React.useState(Colors.notificationGreen)
  const [textColor, setTextColor] = React.useState(Colors.white)
  const [icon, setIcon] = React.useState('checkbox-marked-circle-outline')
  const opacityAnimation = useSharedValue(0)
  const { top } = useSafeAreaInsets()

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacityAnimation.value,
  }))

  useEffect(() => {
    let tempBackgroundColor = Colors.notificationGreen
    let iconName = 'checkbox-marked-circle-outline'
    let color = Colors.white
    switch (type) {
      case NotificationType.success:
        break
      case NotificationType.error:
        tempBackgroundColor = Colors.notificationRed
        color = Colors.white
        iconName = 'alert'
        break
      case NotificationType.warning:
        tempBackgroundColor = Colors.notificationYellow
        iconName = 'alert-circle'
        break
      case NotificationType.disconnected:
        tempBackgroundColor = Colors.notificationBlack
        if (message?.includes('internet')) {
          iconName = 'wifi-strength-alert-outline'
        }
        break
      default:
        tempBackgroundColor = Colors.notificationBlack
        color = Colors.white
        break
    }
    setBackgroundColor(tempBackgroundColor)
    setTextColor(color)
    setIcon(iconName)
  }, [type])


  const animationOptions = {
    duration: ANIMATION_DURATION,
    easing: Easing.ease,
  }

  const startExitingAnimation = () => {
    opacityAnimation.value = withDelay(DELAY,
      withTiming(0, animationOptions, () => {
        'worklet'
        runOnJS(hideNotification)()
      })
    )
  }

  const startEnteringAnimation = () => {
    opacityAnimation.value = withTiming(1, animationOptions, () => {
      'worklet'
      runOnJS(startExitingAnimation)()
    })
  }

  useEffect(() => {
    startEnteringAnimation()
  }, [])

  const colorStyle = {
    color: textColor,
  }

  const notificationBarStyle = {
    backgroundColor,
    marginTop: top,
  }

  return (
    <Animated.View
      testID={'notification-bar'}
      style={[styles.container, animatedStyle, notificationBarStyle]}>
      <View style={styles.content}>
        <MaterialCommunityIcon name={icon} style={[styles.icon, colorStyle]} />
        <View style={styles.textView}>
          <Text numberOfLines={2} style={[styles.notificationTitle, colorStyle]}>
            {title}
          </Text>
        </View>
        <TouchableOpacity testID='notification-close-button' onPress={hideNotification}>
          <MaterialCommunityIcon name='close' style={[styles.closeIcon, colorStyle]} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default observer(Notifications)
