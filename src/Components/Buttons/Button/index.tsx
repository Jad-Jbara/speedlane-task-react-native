import React, { PropsWithChildren } from 'react'
import {
  View,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native'

import Text from 'Components/Text'
import NativeButton from 'Components/Buttons/NativeButton'

import Colors from 'Theme/Colors'
import styles from './styles'

type Props = PropsWithChildren<{
  TextChildren?: React.ReactElement
  loaderColor?: string
  disabled?: boolean
  buttonStyle?: StyleProp<ViewStyle>
  buttonTextStyle?: StyleProp<TextStyle>
  text?: string
  loading?: boolean
  onPress?: () => void | Promise<void>
  notClickable?: boolean
  testID?: string
}>

const ButtonBody: React.FC<Props> = ({
  TextChildren,
  loaderColor = Colors.white,
  children,
  disabled,
  buttonStyle,
  buttonTextStyle,
  text,
  loading,
}) => {
  if (children) {
    return (
      <>
        <View style={[styles.button, disabled && styles.disabled, buttonStyle]}>
          {children}
        </View>
      </>
    )
  }

  let TextBody = (
    <Text
      testID='button-label'
      style={[
        styles.selectText,
        disabled && styles.disabledText,
        buttonTextStyle,
      ]}>
      {text}
    </Text>
  )
  if (TextChildren) {
    TextBody = TextChildren
  }

  return (
    <View style={[styles.button, disabled && styles.disabled, buttonStyle]}>
      {loading ? (
        <ActivityIndicator testID='button-loader' color={loaderColor} />
      ) : (
        TextBody
      )}
    </View>
  )
}

const Button: React.FC<Props> = ({
  disabled = false,
  loading = false,
  notClickable = false,
  onPress,
  ...props
}) => {
  return (
    <NativeButton
      testID={props?.testID || 'button'}
      onPress={onPress}
      disabled={disabled || notClickable || loading}>
      <View>
        <ButtonBody disabled={disabled} loading={loading} {...props}>
          {props.children}
        </ButtonBody>
      </View>
    </NativeButton>
  )
}

export default Button
