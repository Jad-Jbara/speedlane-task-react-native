import React, { useEffect, useMemo, useState } from 'react'
import { NativeSyntheticEvent, SafeAreaView, TextInput, TextInputSubmitEditingEventData, View } from 'react-native'
import { observer } from 'mobx-react'

import List from 'Components/List'
import EmployeeCard from 'Components/EmployeeCard'
import Button from 'Components/Buttons/Button'

import { translate } from 'Helpers/translate'

import { departmentsStore, employeesStore } from 'Stores/StoreFactory'

import FilterButton from './FilterButton'
import styles from './styles'

import { MainParamsList, ScreenComponent } from 'Types'
import BottomAction from 'Components/BottomAction'
import ListEmptyComponent from 'Components/ListEmptyComponent'
import SearchInput from 'Components/SearchInput'
import Images from 'Assets/Images'
import Loader from 'Components/Loader'
import Text from 'Components/Text'
import { format } from 'date-fns'
import KeyboardAvoidingBase from 'Components/KeyboardAvoidingBase'

const EmployeeListingScreen: ScreenComponent<MainParamsList, 'EmployeeListingScreen'> = ({
  navigation,
}) => {
  const { employeeListing } = translate()
  const [lastModifiedAt, setLastModifiedAt] = useState(new Date())

  const refreshList = () => {
    setLastModifiedAt(new Date())
  }


  useEffect(() => {
    navigation.setOptions({
      title: 'Employees',
      headerRight: () => (
        <FilterButton
          onApply={refreshList}
        />
      ),
    })
  }, [navigation])

  const onAddPress = () => {
    navigation.navigate('EmployeeFormsScreen', {})
  }

  const EmptyComponent = () => {
    return (
      <ListEmptyComponent
        title={employeeListing.noEmployees}
        subTitle={employeeListing.noEmployeesDescription}
        withButton
        image={Images.noResults}
        buttonText={employeeListing.addEmployee}
        onButtonPress={onAddPress}
      />
    )
  }


  const onSearchSubmit = (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    const { text } = event.nativeEvent || {}
    employeesStore.setValue('selectedFilters', {
      ...employeesStore.selectedFilters,
      search: text,
    })
    refreshList()
  }

  const ListHeader = () => {
    const fields = useMemo(() => {
      let fields = []
      Object.keys(employeesStore.selectedFilters).filter((key) => key !== 'search').forEach((key) => {
        let value = employeesStore.selectedFilters[key]

        if (key === 'department_id') {
          value = departmentsStore.departments.find((department) => department.id === value)?.name
        }
        if (key === 'joined_at') {
          value = format(value, 'dd/MM/yyyy')
        }

        fields.push({
          title: employeeListing.fields[key],
          value,
        })
      })

      return fields
    }, [employeesStore.selectedFilters])

    return (
      <View style={styles.paddingBottom}>
        {fields && fields.length > 0 ? fields?.map((field) => {
          if (typeof field?.value === 'object' && field?.value !== null) {
            field.value = format(field.value, 'dd/MM/yyyy')
          }
          return (
            <Text>{field?.title}: {field?.value}</Text>
          )
        }) : null}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingBase>

        <View style={styles.container}>
          <SearchInput
            onSubmitEditing={onSearchSubmit}
            placeholder='Search Employees'
          />
          <List
            ListHeaderComponent={ListHeader}
            store={'employeesStore'}
            data={employeesStore.employees}
            loader={employeesStore.loaders.employeesLoader}
            apiCall={employeesStore.getEmployees.bind(employeesStore)}
            rowComponent={{ Row: EmployeeCard, Loader }}
            dataKey={'employees'}
            lastModifiedAt={lastModifiedAt}
            extraApiProps={{
              ...employeesStore.selectedFilters,
            }}
            ListEmptyComponent={EmptyComponent}
          />
          {employeesStore.employees.length > 0 && (
            <BottomAction>
              <Button
                text={employeeListing.addEmployee}
                onPress={onAddPress}
              />
            </BottomAction>
          )}
        </View>
      </KeyboardAvoidingBase>
    </SafeAreaView>
  )
}

export default observer(EmployeeListingScreen)
