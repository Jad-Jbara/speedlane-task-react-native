import React from 'react'
import { StyleSheet, I18nManager, Text as RNText, TextProps } from 'react-native'


const Text: React.FC<TextProps> = ({
  style,
  ...props
}) => {
  let extraStyles = style
  const rtlStyles = I18nManager.isRTL ? { textAlign: 'left' } : {}
  let fontStyle = {}

  if (extraStyles) {
    extraStyles = StyleSheet.flatten(extraStyles)
  }

  if (extraStyles && extraStyles.fontSize) {
    const fontSize = I18nManager.isRTL ? extraStyles.fontSize - 2 : extraStyles.fontSize
    fontStyle = {
      fontSize,
      textAlignVertical: 'center',
    }
  }

  return (
    <RNText
      testID='text'
      maxFontSizeMultiplier={1}
      {...props}
      style={{ ...rtlStyles, ...StyleSheet.flatten(extraStyles), ...fontStyle }}>
      {props.children}
    </RNText>
  )
}

export default Text
