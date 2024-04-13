import DimensionHelper from 'Helpers/DimensionHelper'
import React from 'react'
import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from 'react-native'
import styles from './styles'

const KEYBOARD_OFFSET = DimensionHelper.getHeight(100)

const KeyboardAvoidingBase: React.FC<KeyboardAvoidingViewProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <KeyboardAvoidingView
      testID='keyboard-avoiding-base'
      behavior='padding'
      keyboardVerticalOffset={KEYBOARD_OFFSET}
      style={[styles.container, style]}
      {...props}>
      {children}
    </KeyboardAvoidingView>
  )
}
export default KeyboardAvoidingBase
