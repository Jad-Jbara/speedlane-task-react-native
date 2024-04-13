import React, { useState } from 'react'
import { Pressable } from 'react-native'
import DateTimePicker, { DateTimePickerProps } from 'react-native-modal-datetime-picker'
import { format } from 'date-fns'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Input, { InputProps } from 'Components/Input'

type Props = InputProps & Partial<DateTimePickerProps>

const DatePicker: React.FC<Props> = ({
  field,
  value,
  minimumDate,
  maximumDate,
  ...props
}) => {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)

  const closeDatePicker = () => {
    setIsDateTimePickerVisible(false)
  }

  const openDatePicker = () => {
    setIsDateTimePickerVisible(true)
  }

  const onValueChange = (dateValue: Date | string) => {
    field && field.setValue(dateValue)
    closeDatePicker()
  }
  return (
    <Pressable
      onPress={openDatePicker}>
      <Input
        editable={false}
        onChangeText={onValueChange}
        value={value && format(value, 'dd/MM/yyyy')}
        pointerEvents='none'
        {...props}
        RightAccessory={({ color }) => (
          <MaterialCommunityIcons
            name='calendar'
            size={24}
            color={color} />
        )}
      />
      <DateTimePicker
        mode='date'
        date={value ? new Date(value) : new Date()}
        isVisible={isDateTimePickerVisible}
        onConfirm={onValueChange}
        onCancel={closeDatePicker}
        onHide={closeDatePicker}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
      />
    </Pressable>
  )
}
export default DatePicker
