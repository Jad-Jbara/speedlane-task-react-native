import React, { useCallback, useRef, useState } from 'react'
import { ListRenderItem, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet'

import Chip, { ChipProps } from 'Components/Chip'
import NativeButton from 'Components/Buttons/NativeButton'
import AnimatedCheckbox from 'Components/AnimatedCheckbox'
import Text from 'Components/Text'
import Button from 'Components/Buttons/Button'

import BottomModal from 'Modals/BottomModal'

import styles from './styles'

type ListItem = {
  label: string
  value: string
}

type Props = {
  value: string
  modalTitle?: string
  data: ListItem[]
  onValueChange: (value: string) => void
} & ChipProps

const Picker: React.FC<Props> = ({
  modalTitle,
  data,
  value,
  onValueChange,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(value)
  const bottomModalRef = useRef<BottomSheetModal>(null)

  const openList = () => {
    bottomModalRef.current?.present()
  }

  const renderItem: ListRenderItem<ListItem> = ({ item }) => {
    const isSelected = selectedValue === item.value
    return (
      <NativeButton
        onPress={() => {
          setSelectedValue(item.value)
        }}
        style={styles.listRow}>
        <Text style={styles.listRowTitle}>{item.label}</Text>
        <AnimatedCheckbox
          selected={isSelected}
          rounded
        />
      </NativeButton>
    )
  }

  const closeModal = () => {
    bottomModalRef.current?.dismiss()
  }

  const onSave = useCallback(() => {
    onValueChange && onValueChange(selectedValue)
    closeModal()
  }, [selectedValue])

  const Footer = useCallback(() => {
    return (
      <Button
        onPress={onSave}
        text='Done'
        buttonStyle={styles.doneButton}
      />
    )
  }, [onSave])



  return (
    <View style={styles.container}>
      <Chip
        label={data.find(item => item.value === selectedValue)?.label || 'Select Value'}
        onPress={openList}
        pressable
        IconRight={<MaterialCommunityIcons name='chevron-down' style={styles.icon} />}
        {...props}
      />
      <BottomModal
        ref={bottomModalRef}
        snapPoints={['60%']}
        onClose={closeModal}
        withCloseButton
        title={modalTitle}
        footerComponent={Footer}>
        <BottomSheetFlatList
          renderItem={renderItem}
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </BottomModal>
    </View>
  )
}
export default Picker
