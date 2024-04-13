import React, { useMemo } from 'react'

import NativeButton from 'Components/Buttons/NativeButton'
import Text from 'Components/Text'

import styles from './styles'

import { StyleType } from 'Types'

export type ChipProps = {
  onPress?: () => void
  IconRight?: React.ReactNode
  IconLeft?: React.ReactNode
  label?: string
  extraLabelStyle?: StyleType
  extraContainerStyle?: StyleType
  pressable?: boolean
}

const Chip: React.FC<ChipProps> = ({
  pressable = false,
  onPress,
  IconRight,
  IconLeft,
  label,
  extraLabelStyle,
  extraContainerStyle,

}) => {
  const containerStyle = useMemo(() => [
    styles.container,
    extraContainerStyle && extraContainerStyle,
  ], [extraContainerStyle])

  const labelStyle = useMemo(() => [
    styles.label,
    extraLabelStyle && extraLabelStyle,
  ], [extraLabelStyle])

  return (
    <NativeButton
      disabled={!pressable}
      onPress={onPress}
      style={containerStyle}>
      {React.isValidElement(IconLeft) ? IconLeft : null}
      <Text style={labelStyle}>{label}</Text>
      {React.isValidElement(IconRight) ? IconRight : null}
    </NativeButton>
  )
}
export default Chip


