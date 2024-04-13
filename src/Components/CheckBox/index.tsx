import React, { useCallback } from 'react'
import { Image, View } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { observer } from 'mobx-react'

import Text from 'Components/Text'
import NativeButton from 'Components/Buttons/NativeButton'

import styles from './styles'

type Props = {
  onPress?: () => void
  isSelected: boolean
  rounded?: boolean
  item: {
    label: string
    icon?: string
    disabled: boolean
    image?: number
    customIcon?: React.ReactElement
  }
}

const CheckBox: React.FC<Props> = ({
  item,
  rounded = true,
  isSelected,
  onPress,
}) => {
  const iconName = (() => {
    if (rounded) {
      return isSelected ? 'check-circle' : 'circle-outline'
    }
    return isSelected ? 'checkbox-marked' : 'checkbox-blank-outline'
  })()

  const RenderedIcon = useCallback(() => {
    if (item.icon) {
      return (
        <MaterialCommunityIcon
          name={item.icon}
          style={[styles.icon, isSelected && styles.selected]}
        />
      )
    }
    if (item.image) {
      return (
        <Image
          source={item.image}
          style={[styles.image, isSelected && styles.selectedImage]}
        />
      )
    }
    if (React.isValidElement(item?.customIcon)) {
      return item.customIcon
    }

    return null
  }, [item.icon, item.image, isSelected])

  return (
    <View style={styles.shadow}>
      <NativeButton
        onPress={onPress}
        disabled={item.disabled}
        style={[
          styles.checkBox,
          isSelected && styles.selectedCheckBox,
          item.disabled && styles.disabledCheckBox,
        ]}>
        <View style={styles.row}>
          <RenderedIcon />
          <Text style={[styles.checkBoxLabel, isSelected && styles.selected]}>
            {item.label}
          </Text>
        </View>
        <MaterialCommunityIcon
          name={iconName}
          style={[
            styles.checkBoxIcon,
            isSelected && styles.selectedCheckBoxIcon,
          ]}
        />
      </NativeButton>
    </View>
  )
}
export default observer(CheckBox)
