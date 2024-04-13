import React, { useEffect, useMemo, useRef, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { observer } from 'mobx-react'

import Text from 'Components/Text'
import Accordion from 'Components/Accordion'
import AnimatedCheckbox from 'Components/AnimatedCheckbox'
import Slider from 'Components/Slider'
import DatePicker from 'Components/DatePicker'
import Button from 'Components/Buttons/Button'
import NativeButton from 'Components/Buttons/NativeButton'

import BottomModal from 'Modals/BottomModal'

import Colors from 'Theme/Colors'

import { departmentsStore, employeesStore } from 'Stores/StoreFactory'

import styles from './styles'

type Props = {
  onApply: () => void
}

const DepartmentsSection = React.memo(({
}) => {

  const [selectedDepartment, setSelectedDepartment] = useState(employeesStore.selectedFilters?.department_id ?? null)

  const onDepartmentChange = (value: number) => {
    setSelectedDepartment(previousValue => previousValue === value ? null : value)
  }

  useEffect(() => {
    const newFilters = { ...employeesStore.selectedFilters }
    if (selectedDepartment === null) {
      delete newFilters.department_id
    } else {
      newFilters.department_id = selectedDepartment
    }
    employeesStore.setValue('selectedFilters', {
      ...newFilters
    })
  }, [selectedDepartment])

  const departmentData = useMemo(() => departmentsStore.departments.map(item => ({ value: item.id, label: item.name })), [departmentsStore.departments])

  return (
    <Accordion
      title='Departments'>
      {departmentData.map((item) => {
        const isSelected = selectedDepartment === (item.value)
        const onChange = () => {
          onDepartmentChange(item.value)
        }
        return (
          <NativeButton
            key={`department-${item.value}`}
            onPress={onChange}
            style={styles.listRow}>
            <Text style={styles.listRowTitle}>{item.label}</Text>
            <AnimatedCheckbox
              selected={isSelected}
              rounded
            />
          </NativeButton>
        )
      })}
    </Accordion>
  )
})

const SalarySection = React.memo(({
}) => {

  const onChangeValue = (value: number) => {
    employeesStore.setValue('selectedFilters', {
      ...employeesStore.selectedFilters,
      salary: value,
    })
  }

  return (
    <Accordion
      title='Salary'>
      <Slider
        value={employeesStore.selectedFilters?.salary || 0}
        onChangeValue={onChangeValue}
      />
    </Accordion>
  )
})

const JoinedAtSection = React.memo(({
}) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(employeesStore.selectedFilters.date_of_joining || undefined)
  useEffect(() => {
    if (selectedDate) {
      employeesStore.setValue('selectedFilters', {
        ...employeesStore.selectedFilters,
        date_of_joining: selectedDate,
      })
    }
  }, [selectedDate])

  return (
    <Accordion
      title='Joined At'>
      <DatePicker
        value={selectedDate}
        field={{ field: 'joined_at', setValue: setSelectedDate }}
      />
    </Accordion>
  )
})


const FilterButton: React.FC<Props> = ({
  onApply,
}) => {
  const filterModalRef = useRef<BottomSheetModal>(null)
  const openFilterModal = () => {
    filterModalRef.current?.present()
  }

  const closeModal = () => {
    filterModalRef.current?.dismiss()
  }

  const onApplyPress = () => {
    onApply()
    closeModal()
  }

  const onClear = () => {
    employeesStore.setValue('selectedFilters', {
      search: employeesStore.selectedFilters.search || '',
    })
    onApply()
    closeModal()
  }

  return (
    <>
      <NativeButton
        onPress={openFilterModal}
        style={[styles.filterButton, !employeesStore.hasSelectedFilters && styles.filterButtonOff]}>
        <MaterialCommunityIcons
          name={'filter-variant'}
          size={24}
          color={Colors.primaryColor}
        />
      </NativeButton>
      <BottomModal
        title='Filters'
        swipeToCloseEnabled={false}
        withCloseButton={false}
        snapPoints={['90%']}
        // onClose={closeModal}
        ref={filterModalRef}>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.filterContentContainer}>
          <DepartmentsSection />
          <SalarySection />
          <JoinedAtSection />
          <Button
            text='Apply'
            onPress={onApplyPress}
          />
          <Button
            text='Clear'
            onPress={onClear}
            buttonStyle={styles.clearButton}
          />
        </BottomSheetScrollView>
      </BottomModal>
    </>

  )
}
export default observer(FilterButton)
