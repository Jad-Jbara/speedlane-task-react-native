import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import Text from 'Components/Text'
import Colors from 'Theme/Colors'
import React, {
  ComponentType,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
} from 'react'
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import styles from './styles'

export interface InputAccessoryProps {
  style: StyleProp<any>
  status: InputProps['status']
  multiline: boolean
  editable: boolean
  color: string
  size: number
}

export type InputProps = Omit<TextInputProps, 'ref'> & {
  status?: 'error' | 'disabled'
  label?: string
  LabelTextProps?: TextProps
  helper?: string
  HelperTextProps?: TextProps
  placeholder?: string
  style?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>
  inputWrapperStyle?: StyleProp<ViewStyle>
  RightAccessory?: ComponentType<InputAccessoryProps>
  LeftAccessory?: ComponentType<InputAccessoryProps>
  InputRenderer?: ComponentType<TextInputProps>
  inBottomModal?: boolean
  field?: {
    field: string
    setValue: (value: string) => void
  }
}

const InputRenderFunction = (props: InputProps, ref: Ref<TextInput>) => {
  const {
    label,
    placeholder,
    helper,
    status,
    RightAccessory = () => null,
    LeftAccessory = () => null,
    inBottomModal,
    InputRenderer = inBottomModal ? BottomSheetTextInput : TextInput,
    HelperTextProps,
    LabelTextProps,
    style: inputStyleOverride,
    containerStyle: containerStyleOverride,
    inputWrapperStyle: inputWrapperStyleOverride,
    field,
    ...textInputProps
  } = props
  const input = useRef<TextInput>(null)

  const [isFocused, setIsFocused] = React.useState(false)

  const disabled = textInputProps.editable === false || status === 'disabled'

  const containerStyles = [styles.container, containerStyleOverride]

  const labelStyles = [
    styles.label,
    status === 'disabled' && styles.labelDisabled,
    LabelTextProps?.style,
  ]

  const inputWrapperStyles = [
    styles.inputWrapper,
    status === 'error' && styles.inputWrapperError,
    textInputProps.multiline && styles.inputWrapperMultiline,
    isFocused && styles.inputWrapperFocused,
    inputWrapperStyleOverride,
  ]

  const inputStyles: StyleProp<TextStyle> = [
    styles.input,
    disabled && styles.inputDisabled,
    textInputProps.multiline && styles.inputMultiline,
    inputStyleOverride,
  ]

  const helperStyles = [
    styles.helper,
    status === 'disabled' && styles.helperDisabled,
    HelperTextProps?.style,
  ]

  const accessoryStyle = StyleSheet.flatten<TextStyle>([
    styles.accessory,
    status === 'disabled' && styles.accessoryDisabled,
    status === 'error' && styles.accessoryError,
  ])

  const focusInput = () => {
    if (disabled) {
      return
    }

    input.current?.focus()
  }

  const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false)
    textInputProps.onBlur?.(e)
  }

  const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true)
    textInputProps.onFocus?.(e)
  }

  useImperativeHandle(ref, () => input.current as TextInput)

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={containerStyles}
      onPress={focusInput}
      accessibilityState={{ disabled }}>
      {Boolean(label || helper) && (
        <View style={styles.inputHeader}>
          <Text {...LabelTextProps} style={labelStyles}>
            {label}
          </Text>

          <Text {...HelperTextProps} style={helperStyles}>
            {helper}
          </Text>
        </View>
      )}

      <View style={inputWrapperStyles}>
        {Boolean(LeftAccessory) && (
          <LeftAccessory
            style={accessoryStyle}
            status={status}
            editable={!disabled}
            multiline={textInputProps.multiline ?? false}
            color={accessoryStyle.color as string}
            size={accessoryStyle.width as number}
          />
        )}

        <InputRenderer
          // @ts-expect-error Types of TextInput is not compatible with BottomSheetTextInput
          ref={input}
          textAlignVertical='top'
          placeholder={placeholder}
          placeholderTextColor={Colors.grey}
          onChangeText={field?.setValue}
          editable={!disabled}
          selectionColor={Colors.primaryColor}
          cursorColor={Colors.primaryColor}
          pointerEvents={disabled ? 'none' : undefined}
          {...textInputProps}
          style={inputStyles}
          onBlur={onBlur}
          onFocus={onFocus}
        />

        {Boolean(RightAccessory) && (
          <RightAccessory
            style={accessoryStyle}
            status={status}
            editable={!disabled}
            multiline={textInputProps.multiline ?? false}
            color={accessoryStyle.color as string}
            size={accessoryStyle.width as number}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

const Input = forwardRef(InputRenderFunction)

export default Input
