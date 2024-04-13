import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { observer } from 'mobx-react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { parse } from 'date-fns'

import Text from 'Components/Text'
import Button from 'Components/Buttons/Button'
import BottomAction from 'Components/BottomAction'
import CenteredLoader from 'Components/CenteredLoader'
import ThumbnailWithName from 'Components/ThumbnailWithName'

import { translate } from 'Helpers/translate'

import { departmentsStore, employeesStore } from 'Stores/StoreFactory'
import ConfirmationModalStore from 'Stores/ConfirmationModalStore'

import styles from './styles'

import { Employee, MainParamsList, ScreenComponent } from 'Types'

type ButtonProps = {
  onPress: () => void
}

const EditButton: React.FC<ButtonProps> = ({
  onPress,
}) => {
  return (
    <Button
      text={'EDIT'}
      onPress={onPress}
      buttonStyle={styles.editButton}
    />
  )

}

const EmployeeDetailsScreen: ScreenComponent<MainParamsList, 'EmployeeDetailsScreen'> = ({
  route,
  navigation,
}) => {
  const { id } = route.params || {}
  const { employeeDetails } = translate()
  const [employee, setEmployee] = useState<Employee | null>(null)

  const editEmployee = () => {
    if (!employee) {
      return
    }
    navigation.navigate('EmployeeFormsScreen', {
      item: employee,
      isEdit: true,
    })
  }

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <EditButton
          onPress={editEmployee}
        />
      ),
    })
  }, [navigation, employee])

  useEffect(() => {
    if (!id) {
      return
    }

    employeesStore.getEmployee({
      params: id,
      onSuccess: (response) => {
        response?.data && setEmployee(response.data)
      },
      onError: (error) => {
        console.log('error', error)
      }
    })
  }, [id])

  useEffect(() => {
    if (employeesStore.modifiedEmployee) {
      setEmployee(employeesStore.modifiedEmployee)
      employeesStore.setValue('modifiedEmployee', null)
    }
  }, [employeesStore.modifiedEmployee])

  if (!employee) {
    return <CenteredLoader />
  }

  const deleteEmployee = async () => {
    await employeesStore.deleteEmployee({
      params: id,
      onSuccess: () => {
        navigation.goBack()
      },
      onError: (error) => {
        console.log(error)
      },
    })

  }

  const onDeletePress = () => {
    const { title, description, confirmTitle, cancelTitle } = employeeDetails.deleteConfirmation
    ConfirmationModalStore.open({
      title,
      confirmTitle,
      description,
      cancelTitle,
      onConfirm: deleteEmployee
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}>
        <View style={styles.infoContainer}>
          <ThumbnailWithName
            imageSource={{ uri: employee.image_url }}
            name={employee.name}
          />
        </View>
        <View style={styles.employeeDetails}>
          <View style={styles.row}>
            <MaterialCommunityIcons name={'briefcase'} style={styles.icon} />
            <Text style={styles.smallText}>
              {employee.position}
            </Text>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons name={'map-marker'} style={styles.icon} />
            <Text style={styles.smallText}>
              {employee.location}
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name={'phone'} style={styles.icon} />
            <Text style={styles.smallText}>
              {employee.phone}
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name={'cash'} style={styles.icon} />
            <Text style={styles.smallText}>
              ${employee.salary}
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name={'email'} style={styles.icon} />
            <Text style={styles.smallText}>
              {employee.email}
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name={'calendar'} style={styles.icon} />
            <Text style={styles.smallText}>
              {parse(employee.date_of_birth, 'yyyy-MM-dd', new Date()).toDateString()}
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name={'office-building'} style={styles.icon} />
            <Text style={styles.smallText}>
              {departmentsStore.departments.find(department => department.id === employee.department_id)?.name}
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomAction>
        <Button
          text={employeeDetails.deleteEmployee}
          loading={employeesStore.loaders.deleteEmployeeLoader}
          onPress={onDeletePress}
        />
      </BottomAction>
    </SafeAreaView>
  )
}

export default observer(EmployeeDetailsScreen)
