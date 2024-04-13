import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { observer } from 'mobx-react'

import Button from 'Components/Buttons/Button'
import BottomAction from 'Components/BottomAction'
import Input, { InputProps } from 'Components/Input'
import KeyboardAvoidingBase from 'Components/KeyboardAvoidingBase'
import DatePicker from 'Components/DatePicker'

import { translate } from 'Helpers/translate'

import { departmentsStore, employeesStore } from 'Stores/StoreFactory'

import styles from './styles'

import { MainParamsList, ScreenComponent } from 'Types'
import type { DateTimePickerProps } from 'react-native-modal-datetime-picker'
import NotificationBarStore from 'Stores/NotificationBarStore'
import RandomButtonSpinner from 'Components/RandomButtonSpinner'
import Thumbnail from 'Components/Thumbnail'
import Picker from 'Components/Picker'
import Text from 'Components/Text'

const EmployeeFormsScreen: ScreenComponent<MainParamsList, 'EmployeeFormsScreen'> = ({
  route,
  navigation,
}) => {
  const { item, isEdit } = route.params || {}
  const { employeeForms } = translate()
  const [name, setName] = useState(item?.name ?? '')
  const [position, setPosition] = useState(item?.position ?? '')
  const [phone, setPhone] = useState(item?.phone ?? '')
  const [email, setEmail] = useState(item?.email ?? '')
  const [dateOfBirth, setDateOfBirth] = useState(item?.date_of_birth ?? '')
  const [dateOfJoining, setDateOfJoining] = useState(item?.date_of_joining ?? '')
  const [salary, setSalary] = useState(item?.salary ?? '')
  const [location, setLocation] = useState(item?.location ?? '')
  const [imageUrl, setImageUrl] = useState(item?.image_url ?? '')
  const [departmentId, setDepartmentId] = useState<number>(item?.department_id ?? 0)

  const fields: (InputProps & Partial<DateTimePickerProps>)[] = [
    {
      field: {
        field: 'name',
        setValue: setName,
      },
      value: name,
      label: 'Name',
    },
    {
      field: {
        field: 'position',
        setValue: setPosition,
      },
      value: position,
      label: 'Position',
    },
    {
      field: {
        field: 'phone',
        setValue: setPhone,
      },
      value: phone.toString(),
      label: 'Phone',
      keyboardType: 'numeric',
    },
    {
      field: {
        field: 'email',
        setValue: setEmail,
      },
      value: email,
      label: 'Email',
    },
    {
      field: {
        field: 'salary',
        setValue: setSalary,
      },
      value: salary.toString(),
      label: 'Salary',
      keyboardType: 'numeric',
    },
    {
      field: {
        field: 'location',
        setValue: setLocation,
      },
      value: location,
      label: 'Location',
    },
    {
      field: {
        field: 'date_of_birth',
        setValue: setDateOfBirth,
      },
      value: dateOfBirth,
      label: 'Date of Birth',
      maximumDate: new Date(),
    },
    {
      field: {
        field: 'date_of_joining',
        setValue: setDateOfJoining,
      },
      value: dateOfJoining,
      label: 'Date of Joining',
    },

  ]

  const children = fields.map((field, index) => {
    const ComponentToUse = field.field?.field.includes('date') ? DatePicker : Input
    return (
      // @ts-ignore Expect error due to props mismatch between Input and DatePicker
      React.createElement(ComponentToUse, { ...field, key: index })
    )
  })

  useEffect(() => {
    navigation.setOptions({
      title: item?.name || employeeForms.createEmployee,
    })
  }, [navigation, item])



  const saveChanges = async () => {
    const params = {
      id: item?.id,
      name,
      position,
      phone,
      email,
      date_of_birth: dateOfBirth,
      date_of_joining: dateOfJoining,
      salary,
      location,
      image_url: imageUrl,
      department_id: departmentId,
    }
    if (isEdit) {
      await employeesStore.updateEmployee({
        params,
        onSuccess: () => {
          NotificationBarStore.success(employeeForms.employeeUpdated)
          navigation.goBack()
        }
      })
    } else {
      await employeesStore.createEmployee({
        params,
        onSuccess: () => {
          NotificationBarStore.success(employeeForms.employeeCreated)
          navigation.goBack()
        }
      })

    }
  }

  const generateRandomImageUrl = () => {
    const URL_TO_USE = 'https://randomuser.me/api/portraits/men/'
    const randomNumber = Math.floor(Math.random() * 100)
    setImageUrl(`${URL_TO_USE}${randomNumber}.jpg`)
  }

  const ProfileUrlField = () => {
    return (
      <View style={styles.imageFieldContainer}>
        <Thumbnail
          imageSource={{ uri: imageUrl }}
          size={100}
        />
        <RandomButtonSpinner
          onSpin={generateRandomImageUrl}
        />
      </View>
    )
  }


  const isButtonDisabled = !name || !position || !phone || !email || !dateOfBirth || !dateOfBirth || !salary || !location || !imageUrl || !departmentId
  const departmentData = departmentsStore.departments.map(item => ({ value: item.id, label: item.name }))

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingBase>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          style={styles.container}>
          <ProfileUrlField />
          {children}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Department
            </Text>
            <Picker
              value={departmentId}
              data={departmentData}
              onValueChange={(value) => setDepartmentId(value)}
            />
          </View>
        </ScrollView>
        <BottomAction>
          <Button
            text={employeeForms.save}
            loading={employeesStore.loaders.deleteEmployeeLoader}
            disabled={isButtonDisabled}
            onPress={saveChanges}
          />
        </BottomAction>
      </KeyboardAvoidingBase>
    </SafeAreaView>
  )
}

export default observer(EmployeeFormsScreen)
